// Typed models for the OecPro SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Country {
  code?: string
  continent?: string
  id?: string
  name?: string
  region?: string
}

export type CountryListMatch = Partial<Country>

export interface Product {
  classification?: string
  code?: string
  id?: string
  level?: number
  name?: string
  parent_id?: string
}

export type ProductListMatch = Partial<Product>

export interface Trade {
  destination_id?: string
  export_value?: number
  import_value?: number
  origin_id?: string
  product_id?: string
  year?: number
}

export type TradeListMatch = Partial<Trade>

