import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import ArgumentsParser from "../src/ArgumentsParser";

@suite class ArgumentsParserTests {


    @test "sourceDirectory should be ./dist"() {
        let parser = new ArgumentsParser();
        let expected = "./dist";
        let result = parser.parse(["--source", expected]);

        if (result.source !== expected) {
            throw new Error("Expected expected but was " + result.source);
        }
    }

    @test "sourceDirectory be 'app' for '-s app'"() {
        let parser = new ArgumentsParser();
        let expected = "./app";
        let result = parser.parse(["--s", expected]);

        if (result.source !== expected) {
            throw new Error("Expected expected but was " + result.source);
        }
    }

    @test "destinationDirectory should be './deploy/webdeploy.zip' when no arguments are passed"() {
        let parser = new ArgumentsParser();
        let expected = "./deploy/webdeploy.zip";
        let result = parser.parse([]);

        if (result.dest !== expected) {
            throw new Error("Expected " + expected + " but was " + result.dest);
        }
    }

    @test "destinationDirectory should be './test' when '-d ./test' is passed"() {
        let parser = new ArgumentsParser();
        let expected = "./test";
        let result = parser.parse(["-d", expected]);

        if (result.dest !== expected) {
            throw new Error("Expected " + expected + " but was " + result.dest);
        }
    }

    @test "destinationDirectory should be './src' when no arguments are passed"() {
        let parser = new ArgumentsParser();
        let expected = "./src";
        let result = parser.parse([]);

        if (result.source !== expected) {
            throw new Error("Expected " + expected + " but was " + result.source);
        }
    }

    @test "destinationDirectory should be 'false' when no arguments are passed"() {
        let parser = new ArgumentsParser();
        let expected = false;
        let result = parser.parse([]);

        if (result.verbose) {
            throw new Error("Expected " + expected + " but was " + result.verbose);
        }
    }

    @test "destinationDirectory should be 'false' when '--verbose' passed"() {
        let parser = new ArgumentsParser();
        let expected = true;
        let result = parser.parse(["--verbose"]);

        if (result.verbose === false) {
            throw new Error("Expected " + expected + " but was " + result.verbose);
        }
    }

    @test "destinationDirectory should be 'false' when '--v' passed"() {
        let parser = new ArgumentsParser();
        let expected = true;
        let result = parser.parse(["--v"]);

        if (result.verbose === false) {
            throw new Error("Expected " + expected + " but was " + result.verbose);
        }
    }
}