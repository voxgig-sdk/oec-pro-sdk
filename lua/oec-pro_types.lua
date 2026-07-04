-- Typed models for the OecPro SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Country
---@field code? string
---@field continent? string
---@field id? string
---@field name? string
---@field region? string

---@class CountryListMatch

---@class Product
---@field classification? string
---@field code? string
---@field id? string
---@field level? number
---@field name? string
---@field parent_id? string

---@class ProductListMatch

---@class Trade
---@field destination_id? string
---@field export_value? number
---@field import_value? number
---@field origin_id? string
---@field product_id? string
---@field year? number

---@class TradeListMatch

local M = {}

return M
