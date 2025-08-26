import { useNavigate } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
     fakeAuth.login(() => {
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