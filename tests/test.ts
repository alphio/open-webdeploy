import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import ArgumentsParser from "../src/ArgumentsParser";

@suite class ArgumentsParserTests {


    @test "sourceDirectory should be ./dist"() { 
        let parser = new ArgumentsParser();
        let expected = "./dist";
        let result = parser.parse(["--source", expected]);

        if (result.sourceDirectory != expected) {
            throw new Error("Expected expected but was " + result.sourceDirectory);
        }
    }

    @test "sourceDirectory be 'app' for '-s app'"() { 
        let parser = new ArgumentsParser();
        let expected = "./app";
        let result = parser.parse(["--s", expected]);

        if (result.sourceDirectory != expected) {
            throw new Error("Expected expected but was " + result.sourceDirectory);
        }
    }

    @test "destinationDirectory should be 'deploy' when no arguments are passed"() { 
        let parser = new ArgumentsParser();
        let expected = "./deploy";
        let result = parser.parse([]);

        if (result.outputDirectory != expected) {
            throw new Error("Expected expected but was " + result.outputDirectory);
        }
    }

    @test "destinationDirectory should be './src' when no arguments are passed"() { 
        let parser = new ArgumentsParser();
        let expected = "./src";
        let result = parser.parse([]);

        if (result.sourceDirectory != expected) {
            throw new Error("Expected " + expected + " but was " + result.sourceDirectory);
        }
    }
}