import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import DashboardLayout from 'layouts/DashboardLayout';
import Loading from 'components/Loading';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/app/*" 
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <DashboardLayout />
            </Suspense>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;