# OecPro SDK configuration

module OecProConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "OecPro",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://oec.world/api",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "country" => {},
          "product" => {},
          "trade" => {},
        },
      },
      "entity" => {
        "country" => {
          "fields" => [
            {
              "name" => "code",
              "type" => "`$STRING`",
            },
            {
              "name" => "continent",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "type" => "`$STRING`",
            },
          ],
          "name" => "country",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries",
                  "parts" => [
                    "countries",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "name",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "product" => {
          "fields" => [
            {
              "name" => "classification",
              "type" => "`$STRING`",
            },
            {
              "name" => "code",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "level",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "parent_id",
              "type" => "`$STRING`",
            },
          ],
          "name" => "product",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "classification",
                        "orig" => "classification",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "level",
                        "orig" => "level",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/products",
                  "parts" => [
                    "products",
                  ],
                  "select" => {
                    "exist" => [
                      "classification",
                      "id",
                      "level",
                      "name",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "trade" => {
          "fields" => [
            {
              "name" => "destination_id",
              "type" => "`$STRING`",
            },
            {
              "name" => "export_value",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "import_value",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "origin_id",
              "type" => "`$STRING`",
            },
            {
              "name" => "product_id",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "trade",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "classification",
                        "orig" => "classification",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "destination",
                        "orig" => "destination",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "origin",
                        "orig" => "origin",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "product",
                        "orig" => "product",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "year",
                        "orig" => "year",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/trade",
                  "parts" => [
                    "trade",
                  ],
                  "select" => {
                    "exist" => [
                      "classification",
                      "destination",
                      "origin",
                      "product",
                      "year",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    OecProFeatures.make_feature(name)
  end
end
