# OecPro SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OecProFeatures
  def self.make_feature(name)
    case name
    when "base"
      OecProBaseFeature.new
    when "ratelimit"
      OecProRatelimitFeature.new
    when "retry"
      OecProRetryFeature.new
    when "test"
      OecProTestFeature.new
    when "timeout"
      OecProTimeoutFeature.new
    else
      OecProBaseFeature.new
    end
  end
end
