import React from 'react';
import { Link } from 'react-router-dom';
import cls from "../../../assets/styles/forms/Forms.module.scss";
import { AuthPath } from '../../../services/path';

function AuthNavigate({location}) {
  return (
    <div className={cls.auth_page_bottom_card} data-aos="zoom-in-right">
      <p>
        {
          location === "login" 
            ? "У вас еще нет аккаунта?"
            : "Есть аккаунт?"
        }
        <Link to={
          location === "login"
            ? AuthPath.register
            : AuthPath.login
        }>
          {
            location === "login"
              ? "Зарегистрироваться"
              : "Вход"
          }
        </Link>
      </p>
    </div>
  )
}

export default AuthNavigate;
