# Typed models for the OecPro SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Country(TypedDict, total=False):
    code: str
    continent: str
    id: str
    name: str
    region: str


class CountryListMatch(TypedDict, total=False):
    code: str
    continent: str
    id: str
    name: str
    region: str


class Product(TypedDict, total=False):
    classification: str
    code: str
    id: str
    level: int
    name: str
    parent_id: str


class ProductListMatch(TypedDict, total=False):
    classification: str
    code: str
    id: str
    level: int
    name: str
    parent_id: str


class Trade(TypedDict, total=False):
    destination_id: str
    export_value: float
    import_value: float
    origin_id: str
    product_id: str
    year: int


class TradeListMatch(TypedDict, total=False):
    destination_id: str
    export_value: float
    import_value: float
    origin_id: str
    product_id: str
    year: int
