import React from 'react'
import AuthLayout from '../components/auth-layout'
import Header from '../components/header'
import VerifyForm from '../components/verify-form'

const Verify = () => {
  return (
    <>
    <Header>  </Header>
    <AuthLayout>
   <VerifyForm></VerifyForm>
       </AuthLayout>
       </>
  )
}

export default Verify