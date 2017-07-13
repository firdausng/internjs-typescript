import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { Intern } from "../../../lib/functional/page-object/internjs/internjs.page";
import { Selectors } from "../../../lib/functional/page-object/internjs/internjs.data";

const suite: Object = {
    name: 'create typescript test',

    setup(this: Test) {
        Intern.setBrowser(this);
    },

    async "intern js page"(this: Test) {
        await Intern.navigate();
        let internLogo = await Intern.internLogo;
        assert.equal(internLogo, Selectors.internLogo.expected, "Cant find intern logo");
        await Intern.clickLeftMenu();
        // await Intern.browser.sleep(10000)
        return Intern.browser;
    },

    async "intern js compact"(this: Test) {
        await Intern.go();
        await Intern.clickLeftMenu();
        // await Intern.browser.sleep(10000)
        return Intern.browser;
    }
};

registerSuite(suite);