import { CountryEntity } from './entity/CountryEntity';
import { ProductEntity } from './entity/ProductEntity';
import { TradeEntity } from './entity/TradeEntity';
export type * from './OecProTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OecProEntityBase } from './OecProEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class OecProSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Country(entopts?: Record<string, any>): CountryEntity;
    Product(entopts?: Record<string, any>): ProductEntity;
    Trade(entopts?: Record<string, any>): TradeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OecProSDK;
    tester(testopts?: any, sdkopts?: any): OecProSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OecProSDK;
export { stdutil, config, BaseFeature, OecProEntityBase, OecProSDK, SDK, };
