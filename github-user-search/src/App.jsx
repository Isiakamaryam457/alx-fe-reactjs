import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  async function handleSearch(username) {
    const userData = await fetchUserData(username);
    return userData;
  }

  return (
  <Router>
   <Routes>
    <Route path="/" 
    element={
      <div>
      <h1>Github Usernames</h1>
      <Search onSearch={handleSearch}/>
      </div>
    }
   />
   </Routes>
  </Router>
  )
}
export default App
