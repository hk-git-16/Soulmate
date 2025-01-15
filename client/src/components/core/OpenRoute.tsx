import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

// Define the type for the props
interface OpenRouteProps {
  children: ReactNode;
}

// Define the shape of the auth state
interface AuthState {
  auth: {
    token: string | null;
  };
}

function OpenRoute({ children }: OpenRouteProps) {
  // Access the token from the Redux store
  const { token } = useSelector((state: AuthState) => state.auth);

  // If no token, render the children
  if (token === null) {
    return <>{children}</>;
  } 
  // Redirect to the dashboard for authenticated users
  else {
    return <Navigate to="/dashboard/my-profile" />;
  }
}

export default OpenRoute;
