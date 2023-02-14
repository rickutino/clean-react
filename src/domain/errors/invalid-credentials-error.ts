export class InvalidCredentialsError extends Error {
  constructor () {
    super('Invalid credential')
    this.name = 'InvalidCredentialsError'
  }
}