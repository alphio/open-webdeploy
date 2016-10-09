"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mocha_typescript_1 = require("mocha-typescript");
var ArgumentsParser_1 = require("../src/ArgumentsParser");
var ArgumentsParserTests = (function () {
    function ArgumentsParserTests() {
    }
    ArgumentsParserTests.prototype["sourceDirectory should be ./dist"] = function () {
        var parser = new ArgumentsParser_1["default"]();
        var expected = "./dist";
        var result = parser.parse(["--source", expected]);
        if (result.source != expected) {
            throw new Error("Expected expected but was " + result.source);
        }
    };
    ArgumentsParserTests.prototype["sourceDirectory be 'app' for '-s app'"] = function () {
        var parser = new ArgumentsParser_1["default"]();
        var expected = "./app";
        var result = parser.parse(["--s", expected]);
        if (result.source != expected) {
            throw new Error("Expected expected but was " + result.source);
        }
    };
    ArgumentsParserTests.prototype["destinationDirectory should be 'deploy' when no arguments are passed"] = function () {
        var parser = new ArgumentsParser_1["default"]();
        var expected = "./deploy";
        var result = parser.parse([]);
        if (result.dest != expected) {
            throw new Error("Expected expected but was " + result.dest);
        }
    };
    ArgumentsParserTests.prototype["destinationDirectory should be './test' when '-d ./test' is passed"] = function () {
        var parser = new ArgumentsParser_1["default"]();
        var expected = "./test";
        var result = parser.parse(["-d", expected]);
        if (result.dest != expected) {
            throw new Error("Expected " + expected + " but was " + result.dest);
        }
    };
    ArgumentsParserTests.prototype["destinationDirectory should be './src' when no arguments are passed"] = function () {
        var parser = new ArgumentsParser_1["default"]();
        var expected = "./src";
        var result = parser.parse([]);
        if (result.source != expected) {
            throw new Error("Expected " + expected + " but was " + result.source);
        }
    };
    __decorate([
        mocha_typescript_1.test
    ], ArgumentsParserTests.prototype, "sourceDirectory should be ./dist");
    __decorate([
        mocha_typescript_1.test
    ], ArgumentsParserTests.prototype, "sourceDirectory be 'app' for '-s app'");
    __decorate([
        mocha_typescript_1.test
    ], ArgumentsParserTests.prototype, "destinationDirectory should be 'deploy' when no arguments are passed");
    __decorate([
        mocha_typescript_1.test
    ], ArgumentsParserTests.prototype, "destinationDirectory should be './test' when '-d ./test' is passed");
    __decorate([
        mocha_typescript_1.test
    ], ArgumentsParserTests.prototype, "destinationDirectory should be './src' when no arguments are passed");
    ArgumentsParserTests = __decorate([
        mocha_typescript_1.suite
    ], ArgumentsParserTests);
    return ArgumentsParserTests;
}());
