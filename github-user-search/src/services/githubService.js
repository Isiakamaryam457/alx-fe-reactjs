// githubService.js
import axios from "axios";

export async function fetchUserData({ username, location = '', minRepos = '', page = 1 }) {
  try {
    // If only username is provided and no advanced search criteria
    if (username && !location && !minRepos) {
      // Try direct user lookup first
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });
        
        // Return in the expected format with items array
        return {
          items: [userResponse.data],
          total_count: 1
        };
      } catch (directError) {
        // If direct lookup fails, fall back to search
        const searchQuery = `${username} in:login`;
        const searchResponse = await axios.get(
          `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&page=${page}&per_page=30`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          }
        );
        return searchResponse.data;
      }
    }

    // Advanced search with location and/or minRepos
    let query = '';
    
    if (username) {
      query += `${username} in:login`;
    }
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    // If no search criteria provided, return empty results
    if (!query.trim()) {
      return {
        items: [],
        total_count: 0
      };
    }

    const searchResponse = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=30`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      }
    );

    return searchResponse.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
}