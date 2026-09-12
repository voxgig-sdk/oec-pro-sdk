import { OecProEntityBase } from '../OecProEntityBase';
import type { OecProSDK } from '../OecProSDK';
import type { Control } from '../types';
import type { Country, CountryListMatch } from '../OecProTypes';
declare class CountryEntity extends OecProEntityBase<Country> {
    constructor(client: OecProSDK, entopts: any);
    make(this: CountryEntity): CountryEntity;
    list(this: any, reqmatch?: CountryListMatch, ctrl?: Control): Promise<CountryEntity[]>;
}
export { CountryEntity };
