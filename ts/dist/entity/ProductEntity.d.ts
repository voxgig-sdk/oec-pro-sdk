import { OecProEntityBase } from '../OecProEntityBase';
import type { OecProSDK } from '../OecProSDK';
import type { Control } from '../types';
import type { Product, ProductListMatch } from '../OecProTypes';
declare class ProductEntity extends OecProEntityBase<Product> {
    constructor(client: OecProSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
}
export { ProductEntity };
