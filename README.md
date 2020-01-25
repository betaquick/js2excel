![download](https://img.shields.io/npm/dt/js2excel.svg) ![npm-version](https://img.shields.io/npm/v/js2excel.svg) ![license](https://img.shields.io/npm/l/js2excel.svg) ![bower-license](https://img.shields.io/bower/l/js2excel.svg)

## js2excel
A simple module for excel and json converts each other.

## Installation

It is recommended to run webpack on node 6.x or higher.

Install the pkg with npm:

```
npm install js2excel --save
```

or yarn

```
yarn add js2excel
```

or bower

```
bower install js2excel
```

## Usage

### Convert json to excel
```
// es6
import json2ExcelBin from 'js2excel';

//CommonJS
let json2ExcelBin = require('js2excel');

// excel's data will be exports, which you probably get it from server.
let data = [
    {
        "userId": 1,
        "userPhoneNumber": 1888888888,
        "userAddress": 'xxxx',
        "date": '2013/09/10 09:10'  // string
    },
    {
        "userId": 2,
        "userPhoneNumber": 1888888888,
        "userAddress": 'xxxx',
        "date": new Date()
    },
    {
        "userId": 3,
        "userPhoneNumber": 1888888888,
        "userAddress": 'xxxx',
        "date": new Date()
    }
];

// this will be export a excel and the file's name is user-info-data.xlsx
// the default file's name is excel.xlsx
try {
    json2ExcelBin({
        data,
        name: 'user-info-data',
        formateDate: 'yyyy/mm/dd',
        // headers: ['S/N', 'Phone', 'Address', 'Date']
    });
} catch (e) {
    console.error('export error');
}

// for webpack 3: dynamic import
import(/* webpackChunkName: "js2excel" */ 'js2excel').then(({json2excel}) => {
    json2excel({
        data,
        name: 'test',
        formateDate: 'dd/mm/yyyy',
        // headers: ['S/N', 'Phone', 'Address', 'Date']
    });
}).catch((e) => {

});
```
