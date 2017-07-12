
import { STRATEGIES, Selector } from "../model";


export const Selectors: { [key: string]: Selector } = {
    internLogo: {
        type: STRATEGIES.CSS,
        value: "a.logo",
        expected: "Intern."
    },
    leftMenu: {
        type: STRATEGIES.ID,
        value: "showMenu"
    }
}