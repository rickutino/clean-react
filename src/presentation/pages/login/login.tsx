import React from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Styles from './login-styles.scss'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>4Dev - Polls for programmers</h1>
      </header>
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
