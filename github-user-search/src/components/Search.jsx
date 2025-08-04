import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't search if no criteria provided
    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      return;
    }

    setLoading(true);
    setError(false);
    setUsers([]); // Clear previous results

    try {
      const data = await fetchUserData({ 
        username: username.trim(), 
        location: location.trim(), 
        minRepos: minRepos.trim(), 
        page: 1 
      });
      
      console.log('Search results:', data); // Debug log
      
      setUsers(data.items || []);
      setPage(2);
      setHasMore(data.items && data.items.length === 30); // GitHub returns 30 per page
    } catch (err) {
      console.error('Search error:', err);
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const data = await fetchUserData({ 
        username: username.trim(), 
        location: location.trim(), 
        minRepos: minRepos.trim(), 
        page 
      });
      
      const newUsers = data.items || [];
      setUsers(prev => [...prev, ...newUsers]);
      setPage(prev => prev + 1);
      setHasMore(newUsers.length === 30);
    } catch (err) {
      console.error('Load more error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />
        <button 
          type="submit" 
          disabled={loading || (!username.trim() && !location.trim() && !minRepos.trim())}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded transition-colors"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && users.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-8">
          <p className="text-red-500">Looks like we cant find any users matching your criteria.</p>
        </div>
      )}

      {users.length > 0 && (
        <div className="space-y-4">
          <p className="text-gray-600 text-sm bg-red-500">Found {users.length} user{users.length !== 1 ? 's' : ''}</p>
          
          {users.map(user => (
            <div key={user.id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center gap-4">
                <img 
                  src={user.avatar_url} 
                  alt={`${user.login}'s avatar`} 
                  className="w-4 h-4 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg text-gray-900">{user.login}</h2>
                  {user.name && <p className="text-gray-600">{user.name}</p>}
                  {user.location && <p className="text-sm text-gray-500">📍 {user.location}</p>}
                  {user.public_repos !== undefined && (
                    <p className="text-sm text-gray-500">📚 {user.public_repos} public repos</p>
                  )}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-500 hover:text-blue-700 underline text-sm transition-colors"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {hasMore && (
            <div className="text-center py-4">
              <button
                onClick={loadMore}
                disabled={loading}
                className="bg-gray-800 hover:bg-gray-900 disabled:bg-gray-400 text-white px-6 py-2 rounded transition-colors"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && !error && users.length === 0 && (username || location || minRepos) && (
        <div className="text-center py-8">
          <p className="text-gray-500">No users found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}