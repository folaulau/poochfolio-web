import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
  const authed = useSelector((state) => state.auth.authed);

  if (authed) {
    return children;
  }
  return <Navigate to="/signin" />;

};