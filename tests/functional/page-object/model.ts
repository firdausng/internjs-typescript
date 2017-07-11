export interface Selector {
    type: STRATEGY,
    value: string,
    info?: string,
    action?: ACTION,
    input?: string,
    expected?: string
}

export type STRATEGY =
    "class name" |
    "css selector" |
    "id" |
    "name" |
    "link text" |
    "partial link text" |
    "tag name" |
    "xpath";

export const STRATEGIES = {
    CLASS: 'class name' as STRATEGY,
    CSS: 'css selector' as STRATEGY,
    ID: 'id' as STRATEGY,
    NAME: 'name' as STRATEGY,
    LINK_TEXT: 'link text' as STRATEGY,
    PARTIAL_LINK_TEXT: 'partial link text' as STRATEGY,
    TAG: 'tag name' as STRATEGY,
    XPATH: 'xpath' as STRATEGY
};

export type ACTION =
    "click" | "type" | "hover";

export const ACTIONS = {
    CLICK: "click" as ACTION,
    TYPE: "type" as ACTION,
    HOVER: "hover" as ACTION,
}