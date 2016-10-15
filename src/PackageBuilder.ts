import * as archiver        from "archiver";
import * as fileSystem      from "fs";
import * as mkdirp          from "mkdirp";
import * as xmlBuilder      from "xmlbuilder";
import * as _               from "lodash";
import * as colors          from "colors";

import CommandLineOptions   from "./CommandLineOptions";

export default class PackageBuilder {
    config: CommandLineOptions;

    constructor(config: CommandLineOptions) {
        this.config = config;
    }

    generate(): void {
      console.log(this.config);
      this.buildPackage(this.config);
    }

    generateManifestXml(options: any): any {
      let system_info_xml = xmlBuilder.create("")
        .end({ pretty: true});
        system_info_xml = "<test>test1</test>";
      return system_info_xml;
    }

    generateParametersXml(options: any): any {
      let archive_xml = xmlBuilder.create("").end({ pretty: true});
      archive_xml = "<test>test2</test>";
      return archive_xml;
    }

    createOutputDirectory(directoryPath: string, callback: Function): void {
      mkdirp(directoryPath, function(err) {
        if (err) {
          console.log(err);
        }
      });
    }

    createArchive(path: string): void {
      let output = fileSystem.createWriteStream(path + "/deploy.zip");
      let archive = archiver("zip", { });
      console.log("Creating package...");

      output.on("close", function () {
        console.log("Package  created.");
      });

      archive.on("error", function(err){
        console.log("Error:" + err.toString());
      });

      archive.pipe(output);

      archive.directory("src", {
        "name" : "src"
      });

      archive.append( this.generateParametersXml({}), { name: "parameters.xml" });
      archive.append( this.generateManifestXml({}), { name: "manifest.xml" });

      archive.finalize();
    }

    buildPackage(options: CommandLineOptions): any {
      console.log("Starting...");
      this.createOutputDirectory(options.dest, this.onOutputDirectoryCreated);
    }

    onOutputDirectoryCreated(): void {
      console.log("Output directory created.");
      this.createArchive(this.config.dest);
    }
}