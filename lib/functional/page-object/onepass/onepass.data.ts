import { STRATEGIES, Selector } from "../../../model/functional";

export const Selectors: { [key: string]: Selector } = {
    username: {
        type: "id",
        value: "userName",
        info: "text area for username"
    },
    password: {
        type: "id",
        value: "password",
        info: "text area for password"
    },
    loginButton: {
        type: "id",
        value: "loginButton",
        info: "button to login"
    },
}