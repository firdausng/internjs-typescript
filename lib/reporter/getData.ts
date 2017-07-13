
define(function (require) {

    // var os = require('intern/dojo/node!os');
    // var networkInterfaces = os.networkInterfaces();
    // console.log(networkInterfaces);

    var ip = require("intern/dojo/node!ip");
    console.log( ip.address() );

    function getData(config: any) {
        config = config || {};
        this.output = config.output;
    }

    getData.prototype = {
        runEnd(executor: any) {
            let results = JSON.stringify(executor.suites);
            results = JSON.parse(results);
            results = results.map(result => Object.assign({ip:ip.address(), timestamp:Date.now()}, result))
            console.log(JSON.stringify(results))
            // require("intern/dojo/node!./report-generator").generate(executor.suites, basePath + "/reports");
        },
    }
    return getData;
})