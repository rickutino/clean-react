import React from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Styles from './login-styles.scss'
import LoginHeader from '@/presentation/components/login-header/login-header'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader /> {/* You can use this component when you need it on Login or SignIn pages. */}
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder='Put your email' />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder='Put your Password' />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">Entry</button>
        <span className={Styles.link}>Creat new account</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  )
}

export default Login
