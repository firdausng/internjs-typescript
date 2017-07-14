import Command = require('leadfoot/Command');
import * as assert from 'intern/chai!assert';

import { Base } from "../base.page";
import { STRATEGIES } from "../../../model/functional";

import { Selectors } from "./lynda.data"


export class LyndaLogin extends Base {

    static async submitOrg(org = "mbww.com") {
        // await LyndaLogin.navigate();
        await LyndaLogin.keyIn(Selectors.orgTextArea, org);
        await LyndaLogin.click(Selectors.continueButton);
        return this.browser;
    }
}