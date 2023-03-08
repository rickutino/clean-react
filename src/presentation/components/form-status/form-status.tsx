import React, { useContext } from 'react'
import Styles from './form-status.scss'
import { Spinner } from '@/presentation/components'
import FormContext from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(FormContext)

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { state.isLoading && <Spinner className={Styles.spinner} /> }
      { state.mainError && <span className={Styles.error}>{state.mainError}</span> }
    </div>
  )
}

export default FormStatus
