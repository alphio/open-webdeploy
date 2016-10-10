import PackageBuilder from "./PackageBuilder";
import ArgumentsParser from "./ArgumentsParser";

console.log("Open Web Deploy - Version 0.10");

let parser = new ArgumentsParser();
let args  = parser.parse( process.argv.slice(2) );

let builder = new PackageBuilder(args);
builder.generate();
