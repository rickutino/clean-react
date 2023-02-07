import { HttpPostClient } from "data/protocols/http/httpPostClient"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}