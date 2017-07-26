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
    async "intern js page - Procedural/Imperative  style"(this: Test) {
        await Intern.navigate("https://theintern.github.io/");
        let internLogo = await Intern.internLogo;
        assert.equal(internLogo, Selectors.internLogo.expected, "Cant find intern logo");
        return Intern.clickLeftMenu();
    },
    async "intern js page - Declarative style"(this: Test) {
        await Intern.go();
        return Intern.clickLeftMenu();
    }
};
registerSuite(suite);