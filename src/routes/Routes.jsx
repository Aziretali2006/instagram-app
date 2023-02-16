
import Aos from 'aos';
import React from 'react';
import { Route  , Routes as Swicth} from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';
import "aos/dist/aos.css"

const Routes = () => {

  React.useEffect(() => {
    Aos.init({
      duration: 1000
    });
  } , [])

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