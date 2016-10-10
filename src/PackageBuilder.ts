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
      return system_info_xml;
    }

    generateParametersXml(options: any): any {
      let archive_xml = xmlBuilder.create("").end({ pretty: true});
      return archive_xml;
    }

    buildPackage(options: CommandLineOptions): any {
      console.log("Starting...");

      mkdirp(options.dest, function(err) {
          if(err) {
            console.log(err);
          }
        });

      console.log("Creating web deploy package ");

      let output = fileSystem.createWriteStream(options.dest + "/deploy.zip");
      let archive = archiver("zip", { });
      console.log("Archiving...");

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

      // archive.append(stream);
      // archive.append(generateParametersXml(options), { name:'parameters.xml' });
      // archive.append( generateManifestXml(options), { name:'manifest.xml' });

      archive.finalize();
    }
}