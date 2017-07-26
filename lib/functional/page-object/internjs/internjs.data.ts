import { STRATEGIES, ISelector } from "../../../model/functional";

export const Selectors: { [key: string]: ISelector } = {
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