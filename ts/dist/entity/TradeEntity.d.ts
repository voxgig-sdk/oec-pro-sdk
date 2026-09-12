import { OecProEntityBase } from '../OecProEntityBase';
import type { OecProSDK } from '../OecProSDK';
import type { Control } from '../types';
import type { Trade, TradeListMatch } from '../OecProTypes';
declare class TradeEntity extends OecProEntityBase<Trade> {
    constructor(client: OecProSDK, entopts: any);
    make(this: TradeEntity): TradeEntity;
    list(this: any, reqmatch?: TradeListMatch, ctrl?: Control): Promise<TradeEntity[]>;
}
export { TradeEntity };
