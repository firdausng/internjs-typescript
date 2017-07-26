import { address } from "intern/dojo/node!ip"
import { appendFile } from "intern/dojo/node!fs"
let startRun: any;
let output: any;
function getData(config: any) {
    config = config || {};
    this.output = config.output;
}
getData.prototype = {
    runEnd(executor: any) {
        let results: any = JSON.stringify(executor.suites);
        results = JSON.parse(results);
        let addInfo = {
            ip: address(),
            startRun: startRun,
            endRun: Date.now()
        }
        results.push(addInfo)
        // results = results.map(result => Object.assign({ ip: ip.address(), timestamp: Date.now() }, result))
        // console.log(JSON.stringify(results))
        // require("intern/dojo/node!./report-generator").generate(executor.suites, basePath + "/reports");
        appendFile('result.json', JSON.stringify(results), function (err: any) {
            if (err) throw err;
            console.log('Saved!');
        });
    },
    runStart(executor: any) {
        startRun = Date.now();
        // results = results.map(result => Object.assign({ ip: ip.address(), timestamp: Date.now() }, result))
        // console.log(JSON.stringify(results))
        // require("intern/dojo/node!./report-generator").generate(executor.suites, basePath + "/reports");
    }
}
export = getData;