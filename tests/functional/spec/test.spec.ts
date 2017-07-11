import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { Intern } from "../page-object/internjs.page";

const suite: Object = {
    name: 'create typescript test',

    setup(this: Test) {
        Intern.setBrowser(this.remote);
    },


    async "inter js page"(this: Test) {
        await Intern.navigate();
        let internLogo = await Intern.internLogo;
        assert.equal(internLogo, "Intern.", "Cant find intern logo")
        return this.remote;
    }
};

registerSuite(suite);