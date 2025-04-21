import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login, loading } = React.useContext(UserContext);
  if (loading || login === null) return null;

  if (!login) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
