export interface RequestOption {
    path: string,
    operation: string,
    header: object,
    query: object,
    body: object
}

export type REQUEST_METHOD =
    "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const REQUEST_METHODS = {
    GET: "GET" as REQUEST_METHOD,
    POST: "POST" as REQUEST_METHOD,
    PUT: "PUT" as REQUEST_METHOD,
    DELETE: "DELETE" as REQUEST_METHOD,
    PATCH: "PATCH" as REQUEST_METHOD,
}