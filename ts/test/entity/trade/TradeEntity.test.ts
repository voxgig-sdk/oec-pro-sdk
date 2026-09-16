

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OecProSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TradeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OEC_PRO_TEST_LIVE=TRUE.
  afterEach(liveDelay('OEC_PRO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OecProSDK.test()
    const ent = testsdk.Trade()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OEC_PRO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trade.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"destination_id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"export_value","req":false,"type":"`$NUMBER`","index$":1},{"active":true,"name":"import_value","req":false,"type":"`$NUMBER`","index$":2},{"active":true,"name":"origin_id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"product_id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"year","req":false,"type":"`$INTEGER`","index$":5}],"name":"trade","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"classification","orig":"classification","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"destination","orig":"destination","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"origin","orig":"origin","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"product","orig":"product","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"year","orig":"year","reqd":false,"type":"`$INTEGER`","index$":4}]},"contract":{"id":"GET /trade","json":"{\"operationId\":\"getTradeData\",\"parameters\":[{\"description\":\"Origin country code\",\"in\":\"query\",\"name\":\"origin\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Destination country code\",\"in\":\"query\",\"name\":\"destination\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Product classification code\",\"in\":\"query\",\"name\":\"product\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Year of trade data\",\"in\":\"query\",\"name\":\"year\",\"required\":false,\"schema\":{\"maximum\":2023,\"minimum\":1962,\"type\":\"integer\"}},{\"description\":\"Product classification system (HS92, HS96, HS02, HS07, HS12, SITC)\",\"in\":\"query\",\"name\":\"classification\",\"required\":false,\"schema\":{\"enum\":[\"HS92\",\"HS96\",\"HS02\",\"HS07\",\"HS12\",\"SITC\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"destination_id\":{\"type\":\"string\"},\"export_value\":{\"type\":\"number\"},\"import_value\":{\"type\":\"number\"},\"origin_id\":{\"type\":\"string\"},\"product_id\":{\"type\":\"string\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with trade data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - invalid or missing API key\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for accessing OEC Pro API endpoints\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/trade","segments":[{"lit":"trade"}],"select":{"exist":["classification","destination","origin","product","year"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"trade","name__orig":"trade","Name":"Trade","name_":"trade","name-":"trade","NAME":"TRADE","index$":2}, {"active":true,"entity":"trade","key$":"BasicTradeFlow","kind":"basic","name":"BasicTradeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"trade_ref01"}}],"index$":0}]}, 'Trade')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let trade_ref01_data = Object.values(setup.data.existing.trade)[0] as any

    // LIST
    const trade_ref01_ent = client.Trade()
    const trade_ref01_match: any = {}

    const trade_ref01_list = (await trade_ref01_ent.list(trade_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/trade/TradeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OecProSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['trade01','trade02','trade03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OEC_PRO_TEST_TRADE_ENTID': idmap,
    'OEC_PRO_TEST_LIVE': 'FALSE',
    'OEC_PRO_TEST_EXPLAIN': 'FALSE',
    'OEC_PRO_APIKEY': '',
  })

  idmap = env['OEC_PRO_TEST_TRADE_ENTID']

  const live = 'TRUE' === env.OEC_PRO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OEC_PRO_TEST_TRADE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OecProSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.OEC_PRO_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OEC_PRO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
