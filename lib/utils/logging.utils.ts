import { logging } from "../../config/config";
import { ISelector } from "../model/functional";
export function displayData(data: any) {
    return function (target: object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) {
        let originalMethod = <Function>descriptor.value;
        descriptor.value = function (...args: any[]) {
            let combinedData = Object.assign(data, args[0], { input: args[1] })
            let returnValue = originalMethod!.apply(this, args);
            if (logging) {
                constructInfo(combinedData)
            }
            return returnValue;
        }
    }
}
function constructInfo(info: ISelector) {
    let msg = "I am doing " + info.action!.toUpperCase() + " action with this information \n";
    if (info.type) { msg += "\ttype: " + info.type + "\n"; }
    if (info.value) { msg += "\tvalue: " + info.value + "\n"; }
    if (info.info) { msg += "\tinfo: " + info.info + "\n"; }
    if (info.input) { msg += "\tinput data: " + info.input + "\n"; }
    if (info.expected) { msg += "\texpected data: " + info.expected + "\n"; }
    msg += "\n";
    console.log(msg);
}