import Command = require('leadfoot/Command');
import * as assert from 'intern/chai!assert';

import { Base } from "../base.page";
import { STRATEGIES } from "../../../model/functional";

import { Selectors } from "./onepass.data";
import { users } from "../../../../config/config";

export class OnePassLogin extends Base {

    static async login({ username = users.test1.email, password = users.test1.password }) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickSignOn()
        await this.verifyLogin()
        return this.browser;
    }

    static enterUsername(username: string) {
        return this.keyIn(Selectors.username, username);
    }

    static enterPassword(password: string) {
        return this.keyIn(Selectors.password, password);
    }

    static clickSignOn() {
        return this.click(Selectors.loginButton);
    }

    static async verifyLogin() {
        await this.assertValue({
            type: "css selector",
            value: "a[data-ga-label|='filters: Popular At Company']",
            info: "Verify that login is successfull",
            expected: "Popular at Your Organization"
        })
        return this.browser;
    }
}