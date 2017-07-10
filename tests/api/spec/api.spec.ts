import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { ApiRunner } from "../lib/api.runner";

const suite: Object = {
    name: 'create typescript API test',

    setup: function (this: Test) {
        // base = new Base(this.remote);
    },


    async "API Test"(this: Test) {
        
        await ApiRunner.get({
            uri: "https://jsonplaceholder.typicode.com/posts/1"
        })
        return ApiRunner;
    }
};

registerSuite(suite);