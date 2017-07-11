import { Base } from "./base.page";
import * as assert from 'intern/chai!assert';

export class Intern extends Base {
    
    static async go(){
        await Intern.navigate();
        let internLogo = await Intern.internLogo;
        assert.equal(internLogo, "Intern.", "Cant find intern logo")
    }
}