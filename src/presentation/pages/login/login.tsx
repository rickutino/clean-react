import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, LoginHeader } from '@/presentation/components'
import Input from '@/presentation/components/input/input'
import FormContext from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Required field',
    passwordError: 'Required field',
    mainError: ''
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])
  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader /> {/* You can use this component when you need it on Login or SignIn pages. */}
      <FormContext.Provider value={{ state, setState }} >
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder='Put your email' />
          <Input type="password" name="password" placeholder='Put your Password' />
          <button data-testid='submit' disabled className={Styles.submit} type="submit">Entry</button>
          <span className={Styles.link}>Create new account</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
