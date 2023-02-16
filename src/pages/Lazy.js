import React from "react";


export const Register = React.lazy(() => import("../apps/auth/register/Register"));
export const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const AuthPages = {
  Register,
  Login
}