import { Link, Routes, Route, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h2>Welcome to the profile page</h2>

            <nav>
                <Link to="details">Profile details</Link> |{" "}
                <Link to="settings">Profile settings</Link> |{" "}
                <Link to="blog/123"> Blog Posts</Link>
            </nav>
             
             <Outlet />
       {/*<Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes> */}
        </div>
    )
};

export default Profile;