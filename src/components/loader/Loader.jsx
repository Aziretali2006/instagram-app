import React from 'react';
import { Components } from '..';

import Logo from "../../assets/images/logo/Instagram-Icon.png.webp";

function Loader({fullHeight}) {
  return (
    <div className="loader" style={{height: fullHeight}}>
      <Components.Image src={Logo}/>
    </div>
  )
}

export default Loader;
