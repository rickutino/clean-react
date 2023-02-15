import { HttpResponse } from "./http-response"

export type HttpPostParams<T> = {
  url: string
  body?: T
}
export interface HttpPostClient<T, R> {
  post (params: HttpPostParams<T>): Promise<HttpResponse<R>>
}

// Sobre a estrutura:
// quando for usar em outras função ira precisar de um Body(object) ou Header
// no parametro, para ter mais flexibilidade no interface vou refatorar para
// possiveis adições de params futuras.