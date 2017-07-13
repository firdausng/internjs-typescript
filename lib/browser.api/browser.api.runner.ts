import { Base } from "../functional/page-object/base.page";
import { RequestOption } from "../model/browser.api";

export class BrowserAPI extends Base {

    static xhr(options: RequestOption) {
        // console.log(options)
        return this.browser
            .setExecuteAsyncTimeout(10000)
            .executeAsync(function (options: RequestOption, callback:any) {
                let {
                    path,
                    operation,
                    header,
                    query,
                    body
                        } = options;
                var oReq = new XMLHttpRequest();
                oReq.open(operation, location.origin + path);
                oReq.setRequestHeader("Content-Type", "application/json");
                oReq.setRequestHeader("Accept", "application/json");
                if (body !== undefined) {
                    oReq.send(JSON.stringify(body));
                } else {
                    oReq.send();
                }

                oReq.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        // if (this.readyState == 4 && this.status == 200) {
                        callback(this);
                    }
                };
            }, [options])

    }
}