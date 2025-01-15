import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Define the Props type
interface PrivateRouteProps {
  children: ReactNode; // The children to render if authenticated
}

// Define the state structure (customize this based on your Redux state shape)
interface RootState {
  auth: {
    token: string | null;
  };
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Extract token from the Redux state
  const { token } = useSelector((state: RootState) => state.auth);

  // Check for token and render accordingly
  if (token !== null) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
