
import React from 'react';
import Aos from 'aos';
import { Route  , Routes as Swicth} from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';
import { Components } from '../components';
import "aos/dist/aos.css"

const Routes = () => {

  React.useEffect(() => {
    Aos.init({
      duration: 1000
    });
  } , [])

  return (
    <React.Fragment>
      <React.Suspense fallback={Components.Loader}>
        <Swicth>
          <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
          <Route path={Apps.layout} element={<Routers.LayoutRoutes />}/>
        </Swicth>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;