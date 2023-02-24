
import React from 'react';
import Aos from 'aos';
import { Route  , Routes as Swicth} from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';
import { Components } from '../components';
import { Providers } from '../providers';
import { REQUEST } from '../api';
import "aos/dist/aos.css";

const Routes = () => {
  const [render , setRender] = React.useState(0);
  const { refresh } = Providers.useAuth();

  React.useEffect(() => {
    Aos.init({
      duration: 1000
    });
  } , []);

  React.useEffect(() => {
    const newData = {
      refresh: refresh
    };
    REQUEST.REFRESH_TOKEN(newData)
      .then(res => {
        localStorage.setItem("access" , res.data.access);
      })
    setInterval(() => {
      setRender(prev => prev + 1)
    }, 120000)
  }, [refresh , render])

  return (
    <React.Fragment>
      <React.Suspense fallback={<Components.Loader fullHeight={"100vh"}/> }>
        <Swicth>
          <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
          <Route path={Apps.layout} element={<Routers.LayoutRoutes />}/>
        </Swicth>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;