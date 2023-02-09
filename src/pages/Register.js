import React from 'react'
import AuthLayout from '../components/auth-layout'
import Header from '../components/header'
import RegisterForm from '../components/register-form'

const Register = () => {
  return (
    <>
    <Header></Header>
    <AuthLayout>
 <RegisterForm></RegisterForm>
    </AuthLayout>
    </>)
}

export default Register
