
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPath, Layout } from '../services/path';

function useLocations() {
  const navigate = useNavigate();
  // Auth Forwards
  const goToLogin = React.useCallback(() => navigate(AuthPath.login) , [navigate]);

  // LAYOUT FORWARDS
  const goToHome = React.useCallback(() => navigate(Layout.home) , [navigate])

  return {
    goToLogin,
    goToHome
  }
}

export default useLocations;
