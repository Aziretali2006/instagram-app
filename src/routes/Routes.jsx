
import React from 'react';
import { Route  , Routes as Swicth} from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';

const Routes = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Swicth>
          <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
        </Swicth>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;