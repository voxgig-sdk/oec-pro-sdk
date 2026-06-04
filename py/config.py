# OecPro SDK configuration


def make_config():
    return {
        "main": {
            "name": "OecPro",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://oec.world/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "country": {},
                "product": {},
                "trade": {},
            },
        },
        "entity": {
      "country": {
        "fields": [
          {
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "continent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "country",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/countries",
                "parts": [
                  "countries",
                ],
                "select": {
                  "exist": [
                    "id",
                    "name",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "product": {
        "fields": [
          {
            "name": "classification",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "level",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "parent_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "product",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "classification",
                      "orig": "classification",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "level",
                      "orig": "level",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/products",
                "parts": [
                  "products",
                ],
                "select": {
                  "exist": [
                    "classification",
                    "id",
                    "level",
                    "name",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "trade": {
        "fields": [
          {
            "name": "destination_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "export_value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "import_value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "origin_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "product_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "trade",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "classification",
                      "orig": "classification",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "destination",
                      "orig": "destination",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "product",
                      "orig": "product",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/trade",
                "parts": [
                  "trade",
                ],
                "select": {
                  "exist": [
                    "classification",
                    "destination",
                    "origin",
                    "product",
                    "year",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
