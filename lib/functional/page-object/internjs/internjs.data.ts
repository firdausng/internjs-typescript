import { STRATEGIES, Selector } from "../../../model/functional";

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