import PackageBuilder from "./PackageBuilder";
import ArgumentsParser from "./ArgumentsParser";

let myArgs = process.argv.slice(2);
 console.log("myArgs: ", process);

process.argv.forEach(function (val, index, array) {
            console.log(index + " : " + val);
        });

