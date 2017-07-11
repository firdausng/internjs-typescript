import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { Base } from "../page-object/base.page";

const suite: Object = {
    name: 'create typescript test',

    setup: function (this: Test) {
        Base.setBrowser(this.remote);
    },


    async "inter js page"(this: Test) {
        await Base.navigate();
        let internLogo = await Base.internLogo;
        assert.equal(internLogo, "Intern.", "Cant find intern logo")
        return this.remote;
    }
};

registerSuite(suite);