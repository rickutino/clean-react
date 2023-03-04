import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '../test'
import { mockPostRequest } from '@/data/test'

import axios from 'axios'

jest.mock('axios')

interface SutType {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutType => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct value', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      request.url, request.body
    )
  })

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())

    // mockedAxios.post.mock.results[0].value retorna uma promise (nao object) e preciso igualar o test com esse retorno por isso o test ficou em retorno de promise sem await/async
    // mockedAxios.post.mock.results[0] para retorno Resolved e [1] para retorno Rejects
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
