import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as Test from 'intern/lib/Test';
import { LyndaLogin } from "../../../lib/functional/page-object/lynda/lynda.page";
import { OnePassLogin } from "../../../lib/functional/page-object/onepass/onepass.page";

const suite: Object = {
    name: 'access lynda page',

    setup(this: Test) {
        LyndaLogin.setBrowser(this);
        OnePassLogin.setBrowser(this);
    },

    async "login with test user id"(this: Test) {
        await LyndaLogin.navigate("https://www.lynda.com/signin/organization");
        await LyndaLogin.submitOrg("mbww.com");
        return OnePassLogin.login({});
    },

};

registerSuite(suite);