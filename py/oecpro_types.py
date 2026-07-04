# Typed models for the OecPro SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Country:
    code: Optional[str] = None
    continent: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class CountryListMatch:
    code: Optional[str] = None
    continent: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class Product:
    classification: Optional[str] = None
    code: Optional[str] = None
    id: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    parent_id: Optional[str] = None


@dataclass
class ProductListMatch:
    classification: Optional[str] = None
    code: Optional[str] = None
    id: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    parent_id: Optional[str] = None


@dataclass
class Trade:
    destination_id: Optional[str] = None
    export_value: Optional[float] = None
    import_value: Optional[float] = None
    origin_id: Optional[str] = None
    product_id: Optional[str] = None
    year: Optional[int] = None


@dataclass
class TradeListMatch:
    destination_id: Optional[str] = None
    export_value: Optional[float] = None
    import_value: Optional[float] = None
    origin_id: Optional[str] = None
    product_id: Optional[str] = None
    year: Optional[int] = None

