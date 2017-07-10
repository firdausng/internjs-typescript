import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { Base } from "../page-object/base.page";

import { IRequire } from 'dojo/loader';
declare const require: IRequire;

let base: Base;

const suite: Object = {
    name: 'create typescript test',

    setup: function (this: Test) {
        base = new Base(this.remote);
    },


    async "inter js page"(this: Test) {
        await base.navigate();
        let internLogo = await base.internLogo;
        console.log(internLogo)
        assert.equal(internLogo, "Intern.", "Cant find intern logo")
        return this.remote;
    }
};

registerSuite(suite);