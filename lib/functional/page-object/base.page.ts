import Command = require('leadfoot/Command');
import * as Test from 'intern/lib/Test';

// import * as config from "../../config/config";
import {env, find_timeout} from "../../../config/config";

import { Selector, STRATEGIES } from "./model";

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
}