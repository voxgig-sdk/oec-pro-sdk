import { Context } from './Context';
declare class OecProError extends Error {
    isOecProError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { OecProError };
