import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { ApiRunner } from "../../../lib/api/api.runner";

const suite: Object = {
    name: 'create typescript API test',

    setup: function (this: Test) {
    },

    async "API GET"(this: Test) {
        let response = await ApiRunner.get({
            uri: "https://jsonplaceholder.typicode.com/posts/1",
        });
        console.log(response.body);
        return ApiRunner;
    },

    async "API POST"(this: Test) {
        // this.skip();
        let response = await ApiRunner.post({
            uri: "http://jsonplaceholder.typicode.com/posts",
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })
        console.log(response.body);
        return ApiRunner;
    }
};

registerSuite(suite);