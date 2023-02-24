import React from "react";

// AuthPages
export const Register = React.lazy(() => import("../apps/auth/register/Register"));
export const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const AuthPages = {
  Register,
  Login
}
// LAYOUT PAGES

export const Home = React.lazy(() => import("../apps/layout/home/Home"));
export const Profile = React.lazy(() => import("../apps/layout/profile/Profile"));
export const Users = React.lazy(() => import("../apps/layout/users/Users"));
export const Subscribers = React.lazy(() => import("../apps/layout/subs/Subscribers"));

export const LayoutPages = {
  Home,
  Profile,
  Users,
  Subscribers
}