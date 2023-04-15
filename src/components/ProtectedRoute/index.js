import {Redirect, Route} from 'react-router-dom'


export const ProtectedUsersRoute = props => {
  const sessionToken = localStorage.getItem('sessionToken')

    console.log(sessionToken)
  if (sessionToken === null) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
}

export const ProtectedLoginRoute = props => {
    const sessionToken = localStorage.getItem('otp')
  
      console.log(sessionToken)
    if (sessionToken === null) {
      return <Redirect to="/" />
    }
    return <Route {...props} />
  }

