
import { Context } from './Context'


class OecProError extends Error {

  isOecProError = true

  sdk = 'OecPro'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OecProError
}

