import * as XLSX from 'xlsx';

import IWorkBook from './work-book';

export interface Params {
    data: any[];
    name?: string;
    // dateFormat: /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
    formateDate?: string; 
    headers?: string[];
}

export type CallBack = (data: any) => any;

function s2ab(s: string) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);

    for (let i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
    }

    return buf;
}

function json2ExcelBin(opts: Params): Buffer {
    let { data = [], name = 'excel', formateDate = 'dd/mm/yyyy'} = opts;

    let fileNames: string[] = [];
    let sheets = {};

    const options = {
        dateNF: formateDate,
        skipHeader: !!opts.headers,
    };


    if (opts.headers && Array.isArray(opts.headers)) {
        const headerRow: Array<{[key: string]: string}> = [];
        Object.keys(data[0]).forEach((column, index) => {
            headerRow[column] = opts.headers![index]; });
        data = [
            headerRow,
            ...data,
        ];
    }

    const ws = XLSX.utils.json_to_sheet(data, options);

    // add worksheet to workbook
    fileNames.push(name);
    sheets[name] = ws;

    const wb = new IWorkBook(fileNames, sheets);
    
    const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });

    let buffer = Buffer.from(s2ab(wbout));
    return buffer;
}

export default json2ExcelBin;