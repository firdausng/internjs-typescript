import Command = require('leadfoot/Command');
import * as Test from 'intern/lib/Test';
import * as assert from 'intern/chai!assert';

// import * as config from "../../config/config";
import { env, find_timeout } from "../../../config/config";

import { Selector, STRATEGIES } from "../../model/functional";

export abstract class Base {
    static browser: Command<void>;

    static async setBrowser(test: Test) {
        this.browser = test.remote;
        await this.browser
            .maximizeWindow()
            .setFindTimeout(find_timeout)

    }

    static getBrowser() {
        return this.browser;
    }

    static navigate(url = process.env.HONEY_ENV || env.ui.prod) {
        return this.browser.get(url)
    }

    static click(data: Selector) {
        const { type, value, info } = data;
        data.action = "click";
        Base.displayInfo(data);
        return this.browser
            .findDisplayed(type, value)
            .click()
            .end()
    }

    static keyIn(data: Selector, input: string) {
        const { type, value, info } = data;
        data.action = "typing";
        data.input = input;
        this.displayInfo(data);
        return this.browser
            .find(type, value)
            .click()
            .type(input)
            .end()
    }

    static assertValue(data: Selector) {
        const { type, value, expected } = data;
        data.action = "verify";
        this.displayInfo(data);
        return this.browser
            .find(type, value)
            .getVisibleText()
            .then(text => assert(text === expected, `${text} is not equal to ${expected}`))
    }

    private static displayInfo(info: Selector) {
        let msg = "I am doing " + info.action!.toUpperCase() + " action with this information \n";
        if (info.type) { msg += "\ttype: " + info.type + "\n"; }
        if (info.value) { msg += "\tvalue: " + info.value + "\n"; }
        if (info.info) { msg += "\tinfo: " + info.info + "\n"; }
        if (info.input) { msg += "\tinput data: " + info.input + "\n"; }
        if (info.expected) { msg += "\texpected data: " + info.expected + "\n"; }
        msg += "\n";
        console.log(msg);
    }

    static createRandomText(number = 5) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < number; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}