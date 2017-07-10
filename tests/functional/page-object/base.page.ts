import Command = require('leadfoot/Command');
import * as config from "../../config/config";
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

export class Base {

    browser: Command<void>;

    constructor(remote: Command<void>) {
        this.browser = remote;
    }

    navigate(url = process.env.HONEY_ENV || config.config.env.ui.prod) {
        return this.browser.get(url)
    }
    get internLogo(): Command<string> {
        return this.browser.findByCssSelector("a.logo").getVisibleText();
    }

    click() {

    }
}