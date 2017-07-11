export interface Selector {
    type: string,
    value: string,
    info?: string,
    action: string,
    input?: string,
    expected?: string
}

type STRATEGY =
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

// export enum STRATEGIES {
//     CLASS = 'class name',
//     CSS = 'css selector',
//     ID = 'id',
//     NAME = 'name',
//     LINK_TEXT = 'link text',
//     PARTIAL_LINK_TEXT = 'partial link text',
//     TAG = 'tag name',
//     XPATH = 'xpath'
// }