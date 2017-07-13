
define(function (require) {

    // var os = require('intern/dojo/node!os');
    // var networkInterfaces = os.networkInterfaces();
    // console.log(networkInterfaces);

    var ip = require("intern/dojo/node!ip");
    var fs = require("intern/dojo/node!fs");
    // console.log(ip.address());

    let startRun: any;

    function getData(config: any) {
        config = config || {};
        this.output = config.output;
    }

    getData.prototype = {
        runEnd(executor: any) {
            let results: any = JSON.stringify(executor.suites);
            results = JSON.parse(results);
            let addInfo = {
                ip: ip.address(),
                startRun: startRun,
                endRun: Date.now()
            }
            results.push(addInfo)
            // results = results.map(result => Object.assign({ ip: ip.address(), timestamp: Date.now() }, result))
            // console.log(JSON.stringify(results))
            // require("intern/dojo/node!./report-generator").generate(executor.suites, basePath + "/reports");

            fs.appendFile('result.json', JSON.stringify(results), function (err:any) {
                if (err) throw err;
                console.log('Saved!');
            });
        },

        runStart(executor: any) {
            startRun = Date.now();
            // results = results.map(result => Object.assign({ ip: ip.address(), timestamp: Date.now() }, result))
            // console.log(JSON.stringify(results))
            // require("intern/dojo/node!./report-generator").generate(executor.suites, basePath + "/reports");
        },
    }
    return getData;
})