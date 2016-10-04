export default class ArgumentsParser {
    parse () : void {
        console.log("Webdeploy...");

        process.argv.forEach(function (val, index, array) {
            console.log(index + ' : ' + val);
        });

        
    }

}