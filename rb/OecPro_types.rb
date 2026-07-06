# frozen_string_literal: true

# Typed models for the OecPro SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Country entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] continent
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
Country = Struct.new(
  :code,
  :continent,
  :id,
  :name,
  :region,
  keyword_init: true
)

# Request payload for Country#list.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] continent
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryListMatch = Struct.new(
  :code,
  :continent,
  :id,
  :name,
  :region,
  keyword_init: true
)

# Product entity data model.
#
# @!attribute [rw] classification
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [String, nil]
Product = Struct.new(
  :classification,
  :code,
  :id,
  :level,
  :name,
  :parent_id,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] classification
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [String, nil]
ProductListMatch = Struct.new(
  :classification,
  :code,
  :id,
  :level,
  :name,
  :parent_id,
  keyword_init: true
)

# Trade entity data model.
#
# @!attribute [rw] destination_id
#   @return [String, nil]
#
# @!attribute [rw] export_value
#   @return [Float, nil]
#
# @!attribute [rw] import_value
#   @return [Float, nil]
#
# @!attribute [rw] origin_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Trade = Struct.new(
  :destination_id,
  :export_value,
  :import_value,
  :origin_id,
  :product_id,
  :year,
  keyword_init: true
)

# Request payload for Trade#list.
#
# @!attribute [rw] destination_id
#   @return [String, nil]
#
# @!attribute [rw] export_value
#   @return [Float, nil]
#
# @!attribute [rw] import_value
#   @return [Float, nil]
#
# @!attribute [rw] origin_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
TradeListMatch = Struct.new(
  :destination_id,
  :export_value,
  :import_value,
  :origin_id,
  :product_id,
  :year,
  keyword_init: true
)

