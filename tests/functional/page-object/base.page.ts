import Command = require('leadfoot/Command');
import * as config from "../../config/config";
import { Selector } from "./model";
// let config = require("../../config/config")

const STRATEGIES = [
    'class name',
    'css selector',
    'id',
    'name',
    'link text',
    'partial link text',
    'tag name',
    'xpath'
];

export abstract class Base {
    static browser: Command<void>;

    static async setBrowser(remote: Command<void>) {
        this.browser = remote;
        await this.browser
            .maximizeWindow()
            .setFindTimeout(10000)

    }

    static getBrowser() {
        return this.browser;
    }

    static navigate(url = process.env.HONEY_ENV || config.config.env.ui.prod) {
        return this.browser.get(url)
    }
    static get internLogo(): Command<string> {
        return this.browser.findByCssSelector("a.logo").getVisibleText();
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
        let msg = "I am doing " + info.action.toUpperCase() + " action with this information \n";
        if (info.type) { msg += "\ttype: " + info.type + "\n"; }
        if (info.value) { msg += "\tvalue: " + info.value + "\n"; }
        if (info.info) { msg += "\tinfo: " + info.info + "\n"; }
        if (info.input) { msg += "\tinput data: " + info.input + "\n"; }
        if (info.expected) { msg += "\texpected data: " + info.expected + "\n"; }
        msg += "\n";
        console.log(msg);
    }
}