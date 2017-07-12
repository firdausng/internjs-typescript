import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { Intern } from "../../../lib/functional/page-object/internjs/internjs.page";

const suite: Object = {
    name: 'create typescript test',

    setup(this: Test) {
        Intern.setBrowser(this);
    },


    async "intern js page"(this: Test) {
        await Intern.go();
        await Intern.clickLeftMenu();
        // await Intern.browser.sleep(10000)
        return Intern.browser;
    }
};

registerSuite(suite);