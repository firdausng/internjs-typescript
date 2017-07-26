import { env } from './../../../../config/config';
import Command = require('leadfoot/Command');
import * as assert from 'intern/chai!assert';

import { Base } from "../base.page";
import { STRATEGIES } from "../../../model/functional";

import { Selectors } from "./internjs.data"

export class Intern extends Base {
    static async go(url = process.env.APP_ENV || env.ui.stg) {
        await Intern.navigate(url);
        return this.getBrowser();
    }
    static get internLogo() {
        let { type, value } = Selectors.internLogo
        return this.getBrowser().find(type, value).getVisibleText();
    }
    static clickLeftMenu() {
        return Intern.click(Selectors.leftMenu);
    }
}