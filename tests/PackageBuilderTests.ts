import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import PackageBuilder from "../src/PackageBuilder";

@suite class PackageBuilderTests {
    @test "Package Builder Test"() {

        if (1 !== 1) {
            throw new Error("Expected expected but was failure");
        }
    }

    @test "Package Builder Test 2"() {

        if (1 !== 1) {
            throw new Error("Expected expected but was failure");
        }
    }
}