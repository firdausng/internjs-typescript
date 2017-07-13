function matReporter(config:any) {
    config = config || {};
    this.output = config.output;
}

matReporter.prototype = {
    runEnd(executor:any) {
        let basePath = executor.preExecutor.defaultLoaderOptions.baseUrl;
        require("intern/dojo/node!./report-generator").generate(executor.suites, basePath + "/reports");
    },
}