import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import json2ExcelBin from './index';

let data = [
    {
        userId: 1,
        userPhoneNumber: 1888888888,
        userAddress: 'xxxx',
        date: '2013/09/10 09:10',  // string
    },
    {
        userId: 2,
        userPhoneNumber: 1888888888,
        userAddress: 'xxxx',
        date: new Date(),
    },
    {
        userId: 3,
        userPhoneNumber: 1888888888,
        userAddress: 'xxxx',
        date: new Date(),
    },
];

(async () => {
    try {
        const buff = json2ExcelBin({
            data,
            name: 'user-info-data',
            formateDate: 'yyyy/mm/dd',
            headers: ['S/N', 'one', 'two', 'three'],
        });
    
        await promisify(fs.writeFile)(path.join(__dirname, 'test.xlsx'), buff, {
            encoding: 'binary',
        });
    
    } catch (e) {
        console.error('export error >>> ', e.message);
    }
})();







