# OecPro SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OecProFeatures
  def self.make_feature(name)
    case name
    when "base"
      OecProBaseFeature.new
    when "test"
      OecProTestFeature.new
    else
      OecProBaseFeature.new
    end
  end
end
