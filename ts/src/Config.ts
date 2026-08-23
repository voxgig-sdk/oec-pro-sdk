
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'OecPro',
        slug: "oec-pro",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://oec.world/api",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      country: {
      },

      product: {
      },

      trade: {
      },

    }
  }


  entity = {
    "country": {
      "fields": [
        {
          "name": "code",
          "type": "`$STRING`"
        },
        {
          "name": "continent",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "type": "`$STRING`"
        }
      ],
      "name": "country",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/countries",
              "parts": [
                "countries"
              ],
              "select": {
                "exist": [
                  "id",
                  "name"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "product": {
      "fields": [
        {
          "name": "classification",
          "type": "`$STRING`"
        },
        {
          "name": "code",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "level",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "parent_id",
          "type": "`$STRING`"
        }
      ],
      "name": "product",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "classification",
                    "orig": "classification",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "level",
                    "orig": "level",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products",
              "parts": [
                "products"
              ],
              "select": {
                "exist": [
                  "classification",
                  "id",
                  "level",
                  "name"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "trade": {
      "fields": [
        {
          "name": "destination_id",
          "type": "`$STRING`"
        },
        {
          "name": "export_value",
          "type": "`$NUMBER`"
        },
        {
          "name": "import_value",
          "type": "`$NUMBER`"
        },
        {
          "name": "origin_id",
          "type": "`$STRING`"
        },
        {
          "name": "product_id",
          "type": "`$STRING`"
        },
        {
          "name": "year",
          "type": "`$INTEGER`"
        }
      ],
      "name": "trade",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "classification",
                    "orig": "classification",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "destination",
                    "orig": "destination",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "product",
                    "orig": "product",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/trade",
              "parts": [
                "trade"
              ],
              "select": {
                "exist": [
                  "classification",
                  "destination",
                  "origin",
                  "product",
                  "year"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

