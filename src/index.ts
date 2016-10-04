import PackageBuilder from './PackageBuilder';
import ArgumentsParser from './ArgumentsParser';
import * as yargs  from 'yargs';


var myArgs = process.argv.slice(2);
 console.log('myArgs: ', myArgs);

process.argv.forEach(function (val, index, array) {
            
            console.log(index + ' : ' + val);
        });

