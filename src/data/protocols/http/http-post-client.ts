import { HttpResponse } from "./http-response"

export type HttpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
  post (params: HttpPostParams): Promise<HttpResponse>
}

// Sobre a estrutura:
// quando for usar em outras função ira precisar de um Body(object) ou Header
// no parametro, para ter mais flexibilidade no interface vou refatorar para
// possiveis adições de params futuras.