
import React from 'react';
import cls from "../../assets/styles/container/Container.module.scss";

const Container = ({children}) => <div className={cls.container}>{children}</div>

export default Container;