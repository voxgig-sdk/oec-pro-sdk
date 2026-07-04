// Typed models for the OecPro SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Country is the typed data model for the country entity.
type Country struct {
	Code *string `json:"code,omitempty"`
	Continent *string `json:"continent,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// CountryListMatch mirrors the country fields as an all-optional match
// filter (Go analog of Partial<Country>).
type CountryListMatch struct {
	Code *string `json:"code,omitempty"`
	Continent *string `json:"continent,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// Product is the typed data model for the product entity.
type Product struct {
	Classification *string `json:"classification,omitempty"`
	Code *string `json:"code,omitempty"`
	Id *string `json:"id,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
}

// ProductListMatch mirrors the product fields as an all-optional match
// filter (Go analog of Partial<Product>).
type ProductListMatch struct {
	Classification *string `json:"classification,omitempty"`
	Code *string `json:"code,omitempty"`
	Id *string `json:"id,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
}

// Trade is the typed data model for the trade entity.
type Trade struct {
	DestinationId *string `json:"destination_id,omitempty"`
	ExportValue *float64 `json:"export_value,omitempty"`
	ImportValue *float64 `json:"import_value,omitempty"`
	OriginId *string `json:"origin_id,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Year *int `json:"year,omitempty"`
}

// TradeListMatch mirrors the trade fields as an all-optional match
// filter (Go analog of Partial<Trade>).
type TradeListMatch struct {
	DestinationId *string `json:"destination_id,omitempty"`
	ExportValue *float64 `json:"export_value,omitempty"`
	ImportValue *float64 `json:"import_value,omitempty"`
	OriginId *string `json:"origin_id,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Year *int `json:"year,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
