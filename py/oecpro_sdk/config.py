# OecPro SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "OecPro",
            "slug": "oec-pro",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://oec.world/api",
            "auth": {
                "prefix": "",
            },
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
            "type": "`$STRING`",
          },
          {
            "name": "continent",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "region",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/countries",
                "segments": [
                  {
                    "lit": "countries",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "name",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "countries",
                ],
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "code",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "level",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "parent_id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "level",
                      "orig": "level",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/products",
                "segments": [
                  {
                    "lit": "products",
                  },
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
                  "res": "`body.data`",
                },
                "parts": [
                  "products",
                ],
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "export_value",
            "type": "`$NUMBER`",
          },
          {
            "name": "import_value",
            "type": "`$NUMBER`",
          },
          {
            "name": "origin_id",
            "type": "`$STRING`",
          },
          {
            "name": "product_id",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "destination",
                      "orig": "destination",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "product",
                      "orig": "product",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/trade",
                "segments": [
                  {
                    "lit": "trade",
                  },
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
                  "res": "`body.data`",
                },
                "parts": [
                  "trade",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
