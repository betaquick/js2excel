export interface Params {
    data: any[];
    name?: string;
    formateDate?: string;
    headers?: string[];
}
export declare type CallBack = (data: any) => any;
declare function json2ExcelBin(opts: Params): Buffer;
export default json2ExcelBin;
