import React from 'react'
import { AuthContext } from '../contexts/AuthContext'

function AuthProvider({children}) {
  const [token , setToken] = React.useState(null);

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("access");

    if(tokenData) {
      setToken(tokenData)
    } else {
      setToken(null)
    }
  }, [])

  React.useEffect(() => {
    getToken()
  } , [getToken])

  const values = React.memo(() => ({
    token
  }), [token]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
