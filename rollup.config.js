/**
 * Created by pomy on 03/07/2017.
 */

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import ts from 'rollup-plugin-typescript';
import typescript from 'typescript';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';

export default {
    entry: 'src/index.ts',
    format: 'umd',
    moduleName: 'js2excel',
    dest: 'dist/js2excel.js',
    plugins: [
        builtins(),
        resolve({
            customResolveOptions: 'node_modules',
            jsnext: true
        }),
        commonjs({
            namedExports: {
                'node_modules/xlsx/xlsx.js': ['utils', 'write', 'read']
            }
        }),
        ts({
            typescript
        }),
        babel({
            exclude: 'node_modules/**',
            externalHelpers: true
        })
    ]
}