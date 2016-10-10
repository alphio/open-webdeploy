import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import PackageBuilder from "../src/PackageBuilder";

@suite class PackageBuilderTests {

    

    @test "PackageBuilder should initialize"() {
        let builder = new PackageBuilder();
    }

}