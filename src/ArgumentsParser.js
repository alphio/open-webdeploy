"use strict";
var minimist = require("minimist");
var CommandLineOptions_1 = require("./CommandLineOptions");
var ArgumentsParser = (function () {
    function ArgumentsParser() {
    }
    ArgumentsParser.prototype.parse = function (commandLineArgs) {
        var aliases = { "s": "source" };
        var options = {
            boolean: ["createFolder"],
            default: {
                dest: "./deploy",
                source: "./src" },
            alias: aliases,
            "--": true,
            stopEarly: false };
        var args = minimist(commandLineArgs, options);
        var result = new CommandLineOptions_1["default"]();
        result.sourceDirectory = args["source"];
        result.outputDirectory = args["dest"];
        return result;
    };
    ArgumentsParser.prototype.test = function () {
        return true;
    };
    return ArgumentsParser;
}());
exports.__esModule = true;
exports["default"] = ArgumentsParser;
