export interface Country {
    code?: string;
    continent?: string;
    id?: string;
    name?: string;
    region?: string;
}
export interface CountryListMatch {
    id?: string;
    name?: string;
}
export interface Product {
    classification?: string;
    code?: string;
    id?: string;
    level?: number;
    name?: string;
    parent_id?: string;
}
export interface ProductListMatch {
    classification?: string;
    id?: string;
    level?: string;
    name?: string;
}
export interface Trade {
    destination_id?: string;
    export_value?: number;
    import_value?: number;
    origin_id?: string;
    product_id?: string;
    year?: number;
}
export interface TradeListMatch {
    classification?: string;
    destination?: string;
    origin?: string;
    product?: string;
    year?: number;
}
