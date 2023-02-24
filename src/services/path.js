
export const Apps = {
  accounts: '/accounts/*',
  layout: "/*"
};

// AUTH

export const Auth = {
  register: "registration",
  login: "authentification"
}

export const AuthPath = {
  login: "/accounts/authentification",
  register: "/accounts/registration"
}

// LAYOUT

export const Layout = {
  home: "/",
  profile: "/profile",
  profileID: "/profile/:id",
  users: "/users",
  subscribers: "/subs/:mode"
}
