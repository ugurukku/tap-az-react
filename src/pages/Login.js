import React from 'react'
import AuthLayout from '../components/auth-layout'
import Header from '../components/header'
import LoginForm from '../components/login-form'

const Login = () => {
  return (
    <>
    <Header>  </Header>
    <AuthLayout>
    <LoginForm></LoginForm>
       </AuthLayout>
       </>
  )
}

export default Login
