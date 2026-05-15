package = "voxgig-sdk-oec-pro"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/oec-pro-sdk.git"
}
description = {
  summary = "OecPro SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["oec-pro_sdk"] = "oec-pro_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
