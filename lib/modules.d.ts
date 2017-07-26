declare module 'intern/dojo/node!ip' {
	import ip = require('ip');
	export = ip;
}
declare module 'intern/dojo/node!fs' {
	import fs = require('fs');
	export = fs;
}
declare module 'intern/dojo/node!leadfoot/helpers/pollUntil' {
	import pollUntil = require('leadfoot/helpers/pollUntil');
	export = pollUntil;
}
declare module 'intern/dojo/node!request-promise' {
	import request = require('request-promise');
	export = request;
}
declare interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}