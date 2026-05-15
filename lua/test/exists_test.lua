-- ProjectName SDK exists test

local sdk = require("oec-pro_sdk")

describe("OecProSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
