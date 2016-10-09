import * as minimist from "minimist";
import CommandLineOptions from "./CommandLineOptions"; 

export default class ArgumentsParser {
    parse(commandLineArgs : Array<any>): CommandLineOptions {

        let aliases : { [n: string]: string  } = {"s" : "source"};

        let options = {
            boolean: ["createFolder"],
            default: { 
                dest: "./deploy", 
                source : "./src" },
            alias: aliases,
            "--": true,
            stopEarly: false };

        let args = minimist(commandLineArgs, options);

        let result = new CommandLineOptions();
        result.sourceDirectory = args["source"];
        result.outputDirectory = args["dest"];

        return result;
    }

    test(): boolean {
        return true;
    }

}