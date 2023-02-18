

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Hooks } from '../../hooks';
import { Providers } from '../../providers';
import { Auth } from '../../services/path';
import { AuthPages } from '../Lazy';

const AuthRoutes = () => {
  const { token } = Providers.useAuth();
  const { goToHome } = Hooks.useLocations();

  React.useEffect(() => {
    if(token) {
      goToHome()
    }
  }, [token])

  return (
    <React.Fragment>
      <Switch>
        <Route path={Auth.register} element={<AuthPages.Register />}/>
        <Route path={Auth.login} element={<AuthPages.Login />}/>
      </Switch>
    </React.Fragment>
  )
}

export default AuthRoutes;