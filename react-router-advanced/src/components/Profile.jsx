import { Link, Outlet } from "react-router-dom";

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
        </div>
    )
};

export default Profile;