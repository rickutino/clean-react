import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)

  return {
    sut
  }
}

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    const buttonSibmit = sut.getByTestId('submit') as HTMLButtonElement
    const emailStatus = sut.getByTestId('email-status')
    const passwordStatus = sut.getByTestId('password-status')

    expect(errorWrap.childElementCount).toBe(0)
    expect(buttonSibmit.disabled).toBeTruthy()
    expect(emailStatus.title).toBe('Required field')
    expect(emailStatus.textContent).toBe('🔴')
    expect(passwordStatus.title).toBe('Required field')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})
