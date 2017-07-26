import Command = require('leadfoot/Command');
import Element = require('leadfoot/Element');
import * as Test from 'intern/lib/Test';
import * as assert from 'intern/chai!assert';
import { env, find_timeout } from "../../../config/config";
import { ISelector, STRATEGIES, ACTIONS } from "../../model/functional";
import { displayData } from "../../utils/logging.utils";
let browser: Command<void>;
export abstract class Base {
    // static browser: Command<void>;
    static async setBrowser(test: Test) {
        browser = test.remote;
        await browser
            .maximizeWindow()
            .setFindTimeout(find_timeout)
    }
    static getBrowser() {
        return browser;
    }
    static navigate(url = process.env.HONEY_ENV || env.ui.stg) {
        return browser.get(url)
    }
    static find(data: ISelector): Command<Element> {
        const { type, value } = data;
        return browser
            .find(type, value);
    }
    @displayData({
        action: ACTIONS.CLICK
    })
    static async click(data: ISelector) {
        const { type, value } = data;
        return browser
            .find(type, value)
            .click()
            .end()
    }
    @displayData({
        action: ACTIONS.TYPING
    })
    static keyIn(data: ISelector, input: string) {
        const { type, value } = data;
        data.input = input;
        return browser
            .find(type, value)
            .click()
            .type(input)
            .end()
    }
    static clearOnePassCookies(env = process.env.APP_ENV || "stg") {
        if (env != "prod") {
            return browser.get("https://logindev.interpublic.com/OnePass/MainPage?cmd=login&log=y")
                .clearCookies()
                .end()
        } else {
            return browser.get("https://login.interpublic.com/OnePass/MainPage?cmd=login&log=y")
                .clearCookies()
                .end()
        }

    }
}