import * as minimist from "minimist";
import CommandLineOptions from "./CommandLineOptions";

export default class ArgumentsParser {
    parse(commandLineArgs: Array<any>): CommandLineOptions {

        let aliases: { [n: string]: string  }
                    = {"s": "source",
                        "d": "dest",
                        "?": "help",
                        "v": "verbose"};

        let options = {
            boolean: ["createFolder", "verbose"],
            default: {
                dest: "./deploy",
                source : "./src",
                verbose: false,
                help: false },
            alias: aliases,
            "--": true,
            stopEarly: false };

        let args = minimist(commandLineArgs, options);

        let result = new CommandLineOptions();
        result.source = args["source"];
        result.dest = args["dest"];

        result.verbose = args["verbose"];
        return result;
    }

    test(): boolean {
        return true;
    }

}