import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
     useAuth.login(() => {
        navigate("/", { replace: true });
     });
    };

    return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;