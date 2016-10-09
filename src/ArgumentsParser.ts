import * as minimist from "minimist";

export default class ArgumentsParser {
    parse(): void {
        console.log("Webdeploy...");

        let options = {
            boolean: ["run", "deploy", "relaod"],
            default: { dest: "./dist", source : "." },
            "--": true,
            stopEarly: true };

        let args = minimist(process.argv.slice(2), options);
        console.log(args);
    }

}