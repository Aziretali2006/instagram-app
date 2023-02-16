
import React from 'react';
import Logo from "../../../assets/images/logo/insta.png"
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import { Link } from 'react-router-dom';
import { FormsValidate } from '../../../helpers/Forms';
import { REQUEST } from '../../../api';
import { Hooks } from '../../../hooks';
import { AuthPath } from '../../../services/path';

import cls from "../../../assets/styles/register/Register.module.scss";

const Register = () => {
  const { goToLogin } = Hooks.useLocations();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm(({
    mode: "onSubmit"
  }));

  const onSubmit = (data) => {

    const newData = {
      ...data,
      avatar: null
    }

    if(data) {
      const request = REQUEST.CREATE_USER(newData);
      
      request 
        .then(res => {
          goToLogin()
        })
    }


  }

  return (
    <Components.Container>
      <section className={cls.register_page}>
        <div className={cls.register_page_card}>
          <Components.Image src={Logo}/>

          <h3>Зарегистрируйтесь, чтобы смотреть фото и видео от друзей.</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Username"
                err={errors}
                {...register("username" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="First Name"
                err={errors}
                {...register("first_name" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.first_name ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Last Name"
                err={errors}
                {...register("last_name" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.last_name ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="text"
                placeholder="Bio"
                err={errors}
                {...register("bio" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.bio ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="email"
                placeholder="Email"
                err={errors}
                {...register("email" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="password"
                placeholder="Password"
                err={errors}
                {...register("password" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
            </Components.Forms.Divider>

            <Components.Forms.Divider>
              <Components.Forms.TextInput 
                type="password"
                placeholder="Password Repeat"
                err={errors}
                {...register("password_repeat" , FormsValidate())}
              />
              <Components.Forms.Errors err={errors?.password_repeat ? "err" : "success"}/>
            </Components.Forms.Divider>
            
            <p className={cls.useable_service}>
              Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram.
              <a href="https://www.facebook.com/help/instagram/261704639352628"> Узнать больше</a>
            </p>

            <Components.Forms.Divider>
                <Components.Forms.AuthSubmit 
                  location={"Регистрация"}
                />
            </Components.Forms.Divider>
          </form>
        </div>
        <div className={cls.register_page_bottom_card}>
          <p>
            Есть аккаунт?
            <Link to={AuthPath.login}>
              Вход
            </Link>
          </p>
        </div>
      </section>
    </Components.Container>
  )
};

export default Register;