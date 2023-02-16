import React from 'react';
import { Components } from '..';

import Logo from "../../assets/images/logo/Instagram-Icon.png.webp";

function Loader() {
  return (
    <div className="loader">
      <Components.Image src={Logo}/>
    </div>
  )
}

export default Loader;
