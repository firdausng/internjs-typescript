import Command = require('leadfoot/Command');
import * as assert from 'intern/chai!assert';

import { Base } from "../base.page";
import { STRATEGIES } from "../../../model/functional";

import {Selectors} from "./internjs.data"

export class Intern extends Base {
    
    static async go(): Promise<void>{
        await Intern.navigate();
        let internLogo = await Intern.internLogo;
        assert.equal(internLogo, Selectors.internLogo.expected, "Cant find intern logo");
        return this.browser;
    }

    static get internLogo(): Command<string> {
        let {type, value} = Selectors.internLogo
        return this.browser.find(type, value).getVisibleText();
    }

    static clickLeftMenu(): Command<string>{
        return Intern.click(Selectors.leftMenu);
    }
}