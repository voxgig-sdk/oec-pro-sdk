# OecPro SDK utility: make_context
require_relative '../core/context'
module OecProUtilities
  MakeContext = ->(ctxmap, basectx) {
    OecProContext.new(ctxmap, basectx)
  }
end
