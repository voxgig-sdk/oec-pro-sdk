-- OecPro SDK error

local OecProError = {}
OecProError.__index = OecProError


function OecProError.new(code, msg, ctx)
  local self = setmetatable({}, OecProError)
  self.is_sdk_error = true
  self.sdk = "OecPro"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OecProError:error()
  return self.msg
end


function OecProError:__tostring()
  return self.msg
end


return OecProError
