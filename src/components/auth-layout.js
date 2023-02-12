import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='grid place-items-center min-h-[100vh] bg-slate-700'>
    {children}
    </div>
  )
}

export default AuthLayout
