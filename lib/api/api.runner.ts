import { OptionsWithUri, get, post, put, patch, del, OptionsWithUrl } from 'intern/dojo/node!request-promise';
import { api_timeout } from "../../config/config";

export class ApiRunner {

    private static _base_URL: string;
    private static _api_key: string;
    private _timeout: number;
    private static _query: { [key: string]: string };
    private static _base_header = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    static set BaseUrl(url: string) {
        this._base_URL = url;
    }

    static set Header(headers: { [key: string]: string }) {
        this._base_header = Object.assign(headers, this._base_header)
    }

    static set Query(query: { [key: string]: string }) {
        this._query = Object.assign(query, this._query)
    }

    // private static setApiKey() {
    //     if(api_key.location==="header") 
    //         this._api_key = Object.assign(apiKey, this._api_key)
    // }

    private static setOptions(options: any) {
        let {
            uri,
            query,
            body,
            header,
            timeout
        } = options;
        body = JSON.stringify(body);

        let formedOptions = {
            // method: options.method,
            uri,
            qs: query,
            body: body,
            headers: header ? Object.assign(header, ApiRunner._base_header) : ApiRunner._base_header,
            timeout: process.env.API_TIMEOUT ? process.env.API_TIMEOUT : timeout ? timeout : api_timeout,
            resolveWithFullResponse: true,
            time: true,
            rejectUnauthorized: false
        };

        ApiRunner.printEndPointInfo(formedOptions)
        return formedOptions;
    }

    static async get(options: any) {
        let response: any;
        try {
            response = await get(ApiRunner.setOptions(options));
            ApiRunner.printTimingPhases(response.timingPhases);
        } catch (error) {
            response = error;
            // ApiRunner.printTimingPhases(response.timingPhases);
        }
        return response;
    }

    static async post(options: any) {
        let response: any;
        try {
            response = await post(ApiRunner.setOptions(options))
            ApiRunner.printTimingPhases(response.timingPhases);
        } catch (error) {
            response = error;
        }
        return response;
    }

    static async put(options: any) {
        let response: any;
        try {
            response = await put(ApiRunner.setOptions(options))
            ApiRunner.printTimingPhases(response.timingPhases);
        } catch (error) {
            response = error;
        }
        return response;
    }

    static async patch(options: any) {
        let response: any;
        try {
            response = await patch(ApiRunner.setOptions(options));
            ApiRunner.printTimingPhases(response.timingPhases);
        } catch (error) {
            response = error;
        }
        return response;
    }

    static async delete(options: any) {
        let response: any;
        try {
            response = await del(ApiRunner.setOptions(options));
            ApiRunner.printTimingPhases(response.timingPhases);
        } catch (error) {
            response = error;
        }
        return response;
    }

    private static printEndPointInfo({ uri, method, path, timeout, body, headers, query }: { [key: string]: any }) {
        // const queryObj = query ? Object.assign(query, apikey) : apikey
        const queryString = ApiRunner.objToQueryString(query);
        console.log(`
            EndPoint Info
            ======================================
            Operation   : ${method}
            Full Path   : ${uri + '?' + queryString}
            Timeout     : ${timeout}
            Header      : ${JSON.stringify(headers)}
            Query       : ${queryString}
            Body Data   : ${body ? body : "{}"}
            =====================================`)
    }

    private static printTimingPhases({ wait, dns, tcp, firstByte, download, total }: any) {
        console.log(`
        Timing Phase (in seconds)
        ===================================
        wait (Duration of socket initialization)            : ${(wait / 1000).toFixed(4)} seconds
        dns (Duration of DNS lookup)                        : ${(dns / 1000).toFixed(4)} seconds
        tcp (Duration of TCP connection)                    : ${(tcp / 1000).toFixed(4)} seconds
        firstByte (Duration of HTTP server response)        : ${(firstByte / 1000).toFixed(4)} seconds
        download (Duration of HTTP download)                : ${(download / 1000).toFixed(4)} seconds
        total (Duration entire HTTP round-trip)             : ${(total / 1000).toFixed(4)} seconds
    `)
    }

    private static trimPath(path: string) {
        return (path.charAt(0) === "/") || (path.charAt(0) === "\\") ?
            path = path.slice(1, path.length) :
            path = path;
    }

    private static objToQueryString(obj:any) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '=' + obj[p] + '&';
            }
        }
        str = str.substring(0, str.length - 1);
        return str;
    }

}