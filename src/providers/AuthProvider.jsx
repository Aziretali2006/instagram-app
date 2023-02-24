import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { CiSaveUp2 } from "react-icons/ci";
import { VscSignOut } from "react-icons/vsc";
import { BsMoon } from "react-icons/bs";
import { REQUEST } from '../api';

function AuthProvider({children}) {
  const [token , setToken] = React.useState(null);
  const [refresh , setRefresh] = React.useState(null);
  const [state , setState] = React.useState("");
  const [user , setUser] = React.useState(null);
  const [users , setUsers] = React.useState(null);

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    if(tokenData && refreshToken) {
      setToken(tokenData);
      setRefresh(refreshToken)
    } else {
      setToken(null);
      setRefresh(null)
    }
  }, [])

  const getUser = React.useCallback(() => {
    const request = REQUEST.GET_CURRENT_USER();

    request
      .then(res => {
        const data = res.data

        setUser(data)
      })
  });

  const getALLUsers = React.useCallback(() => {
    const request = REQUEST.GET_ALL_USERS();

    request 
      .then(res => {
        const data = res.data

        setUsers(data)
      })
  })

  
  React.useEffect(() => {
    getToken();
    getUser()
    getALLUsers();
  } , 
  [
    getToken , 
    state , 
    getUser,
    getALLUsers
  ]);

  const logOut = React.useCallback(() => {
    setToken(null);
    setState("Log out!");
    setRefresh(null);
    localStorage.clear();
  } , []);

  const OptionList = React.useCallback(() => {
    return [
      {
        id: 1,
        caption: "Сохраненнoе",
        icon: CiSaveUp2
      },
      {
        id:2,
        caption: "Переключить тему",
        icon: BsMoon
      },
      {
        id:3,
        caption: "Выйти",
        icon: VscSignOut,
        event: () => logOut()
      },
    ]
  } , [logOut])

  const values = React.useMemo(() => ({
    token,
    setState,
    logOut,
    OptionList,
    user,
    users,
    refresh,
  }), 
  [
    token , 
    setState , 
    logOut , 
    OptionList , 
    user,
    users,
    refresh,
  ]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
