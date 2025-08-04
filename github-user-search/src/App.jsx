import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';
import './index.css'

function App() {
  async function handleSearch(criteria) {
    const userData = await fetchUserData(criteria);
    return userData;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-4">
              <h1 className="text-2xl font-bold text-center mb-6">GitHub User Search</h1>
              <Search onSearch={handleSearch} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
