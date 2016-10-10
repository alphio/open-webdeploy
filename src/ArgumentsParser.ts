import * as minimist from "minimist";
import * as colors from "colors";
import CommandLineOptions from "./CommandLineOptions";

export default class ArgumentsParser {
    parse(commandLineArgs: Array<any>): CommandLineOptions {

        let aliases: { [n: string]: string  }
                    = {"s": "source",
                        "d": "dest",
                        "?": "help",
                        "v": "verbose"};

        let options = {
            boolean: ["verbose"],
            default: {
                dest: "./deploy/build.zip",
                source : "./src",
                "config-path": "./webdeploy.config",
                verbose: false,
                help: false },
            alias: aliases,
            "--": true,
            stopEarly: false,
            unknown: this.handleUnknow };

        let args = minimist(commandLineArgs, options);

        let result = new CommandLineOptions();
        result.source = args["source"];
        result.dest = args["dest"];
        result.configPath = args["config-path"];

        result.verbose = args["verbose"];
        return result;
    }

    handleUnknow(param: any): boolean {
        console.log("open-webdeploy " + "WARN:" + " Unknown recognized parameter: '" + param + "'");
        return true;
    }

    test(): boolean {
        return true;
    }

}