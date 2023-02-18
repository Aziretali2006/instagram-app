
import React from 'react';
import Icons from "../../../assets/images/icons/sprite_core_2x.png";
import classNames from 'classnames';

import cls from "../../../assets/styles/forms/Forms.module.scss";

function Errors({err}) {

  const errHandler = () => {
    if(err === undefined) {
      return cls.icons
    } else if (err === "err") {
      return classNames(cls.err_icons , cls.icons)
    } else if(err === "success") {
      return classNames(cls.ok_icons , cls.icons)
    }
  }

  return (
    <div 
      style={{background: `url(${Icons})`}} 
      className={errHandler()} 
    />
  )
}

export default Errors;