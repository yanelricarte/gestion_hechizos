import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
