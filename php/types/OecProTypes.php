<?php
declare(strict_types=1);

// Typed models for the OecPro SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Country entity data model. */
class Country
{
    public ?string $code = null;
    public ?string $continent = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** Request payload for Country#list. */
class CountryListMatch
{
    public ?string $code = null;
    public ?string $continent = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** Product entity data model. */
class Product
{
    public ?string $classification = null;
    public ?string $code = null;
    public ?string $id = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?string $parent_id = null;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public ?string $classification = null;
    public ?string $code = null;
    public ?string $id = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?string $parent_id = null;
}

/** Trade entity data model. */
class Trade
{
    public ?string $destination_id = null;
    public ?float $export_value = null;
    public ?float $import_value = null;
    public ?string $origin_id = null;
    public ?string $product_id = null;
    public ?int $year = null;
}

/** Request payload for Trade#list. */
class TradeListMatch
{
    public ?string $destination_id = null;
    public ?float $export_value = null;
    public ?float $import_value = null;
    public ?string $origin_id = null;
    public ?string $product_id = null;
    public ?int $year = null;
}

