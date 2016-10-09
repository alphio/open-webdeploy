import PackageBuilder from "./PackageBuilder";
import ArgumentsParser from "./ArgumentsParser";

console.log("Open Webdeploy");

let parser = new ArgumentsParser();
let args  = parser.parse( process.argv.slice(2) );

console.log(args);