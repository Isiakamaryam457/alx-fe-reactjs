import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Profile/></ProtectedRoute>}>
        <Route path="details"  element={<ProfileDetails/>} />
        <Route path="settings"  element={<ProfileSettings/>} />
        <Route path="/blog/:Id" element={<BlogPost />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App;