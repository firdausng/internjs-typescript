require("marko/node-require").install();
var fs = require("fs");
var template = require("./template.marko")


module.exports.generate = function (data: any, basePath: any) {

    let dateTime = new Date();
    // console.log(`
    //     ${dateTime.getUTCFullYear()}
    //     ${dateTime.getUTCMonth()+1}
    //     ${dateTime.getUTCDate()}
    //     ${dateTime.getUTCHours()}
    //     ${dateTime.getUTCMinutes()}
    //     ${dateTime.getUTCSeconds()}
    // `)
    let UTCnow = `${dateTime.getUTCFullYear()}_${dateTime.getUTCMonth() + 1}_${dateTime.getUTCDate()}_${dateTime.getUTCHours()}_${dateTime.getUTCMinutes()}_${dateTime.getUTCSeconds()}`
    let reportDir = `${basePath}/${UTCnow}`
    if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath);
    }
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }
    let outputDataFile = `${reportDir}/result.json`
    fs.writeFile(outputDataFile, JSON.stringify(data), function (err: any) {
        if (err) return console.log(err);
    })

    fs.createReadStream(__dirname + "/style_materilize.css").pipe(fs.createWriteStream(`${reportDir}/style_materilize.css`));
    fs.createReadStream(__dirname + "/style.css").pipe(fs.createWriteStream(`${reportDir}/style.css`));

    template.renderToString(data, function (err: any, output: any) {
        // console.log(output);
        var outputFile = `${reportDir}/result.html`;
        fs.writeFile(outputFile, output, function (err: any) {
            if (err) return console.log(err);
            console.log("save done");
            console.log("result can be viewed at " + outputFile)
        })

    });
}