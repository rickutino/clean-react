import React from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, LoginHeader } from '@/presentation/components'
import Input from '@/presentation/components/input/input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader /> {/* You can use this component when you need it on Login or SignIn pages. */}
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder='Put your email' />
        <Input type="password" name="password" placeholder='Put your Password' />
        <button className={Styles.submit} type="submit">Entry</button>
        <span className={Styles.link}>Create new account</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
