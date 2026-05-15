# OecPro SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OecProUtility.registrar = ->(u) {
  u.clean = OecProUtilities::Clean
  u.done = OecProUtilities::Done
  u.make_error = OecProUtilities::MakeError
  u.feature_add = OecProUtilities::FeatureAdd
  u.feature_hook = OecProUtilities::FeatureHook
  u.feature_init = OecProUtilities::FeatureInit
  u.fetcher = OecProUtilities::Fetcher
  u.make_fetch_def = OecProUtilities::MakeFetchDef
  u.make_context = OecProUtilities::MakeContext
  u.make_options = OecProUtilities::MakeOptions
  u.make_request = OecProUtilities::MakeRequest
  u.make_response = OecProUtilities::MakeResponse
  u.make_result = OecProUtilities::MakeResult
  u.make_point = OecProUtilities::MakePoint
  u.make_spec = OecProUtilities::MakeSpec
  u.make_url = OecProUtilities::MakeUrl
  u.param = OecProUtilities::Param
  u.prepare_auth = OecProUtilities::PrepareAuth
  u.prepare_body = OecProUtilities::PrepareBody
  u.prepare_headers = OecProUtilities::PrepareHeaders
  u.prepare_method = OecProUtilities::PrepareMethod
  u.prepare_params = OecProUtilities::PrepareParams
  u.prepare_path = OecProUtilities::PreparePath
  u.prepare_query = OecProUtilities::PrepareQuery
  u.result_basic = OecProUtilities::ResultBasic
  u.result_body = OecProUtilities::ResultBody
  u.result_headers = OecProUtilities::ResultHeaders
  u.transform_request = OecProUtilities::TransformRequest
  u.transform_response = OecProUtilities::TransformResponse
}
