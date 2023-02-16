
import React from 'react';
import { Components } from '../../../components';
import Logo from "../../../assets/images/logo/insta.png";
import cls from "../../../assets/styles/login/Login.module.scss";
import { useForm } from 'react-hook-form';

const Login = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm({
    mode: "onBlur"
  })

  return (
    <Components.Container>
      <section className={cls.login_page}>
        <div className={cls.login_page_card}>
          <Components.Image src={Logo}/>
        </div>
      </section>
    </Components.Container>
  )
}

export default Login;