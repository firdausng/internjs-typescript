// import * as request from 'request-promise';
import { OptionsWithUri, get,  } from 'intern/dojo/node!request-promise';
import pollUntil = require('intern/dojo/node!leadfoot/helpers/pollUntil');
// import request = require("intern/dojo/node!request-promise")

export class ApiRunner {

    static get(options: OptionsWithUri) {
        return get(options)
            .then(response => {
                console.log(response.dada)
            })
            .catch(error =>{
                throw "ERROR"
            })
    }
}