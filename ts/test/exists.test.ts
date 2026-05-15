
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OecProSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OecProSDK.test()
    equal(null !== testsdk, true)
  })

})
