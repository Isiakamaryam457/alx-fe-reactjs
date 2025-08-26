import { Navigate } from "react-router-dom";
import { fakeAuth } from "./useAuth";

function ProtectedRoute({ children }) {
 if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/login" replace/>;
 }
  return children; 
}

export default ProtectedRoute;