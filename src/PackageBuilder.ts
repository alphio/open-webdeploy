import * as archiver        from "archiver";
import * as fileSystem      from "fs";
import * as mkdirp          from "mkdirp";
import * as xmlBuilder      from "xmlbuilder";
import * as _               from "lodash";
import * as colors          from "colors";

export default class PackageBuilder {
    int: number;

    generateManifestXml(options: any): any {
      let system_info_xml = xmlBuilder.create("")
        .end({ pretty: true});
      return system_info_xml;
    }

    generateParametersXml(options: any): any {
        let archive_xml = xmlBuilder.create("").end({ pretty: true});
      return archive_xml;
    }

   build(options: any, callback: any): void {

  }
}