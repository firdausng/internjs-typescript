import { STRATEGIES, Selector } from "../../../model/functional";

export const Selectors: { [key: string]: Selector } = {
    orgTextArea: {
        type: "id",
        value: "org-input",
        info: "text area for organization"
    },
    continueButton: {
        type: "id",
        value: "org-submit",
        info: "submit button for organization"
    },
}