/** @format */

//Node.js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc.

//process Property
console.log(process.arch);
console.log(process.args);
console.log(process.env);
console.log(process.pid);
console.log(process.platform);
console.log(process.release);
console.log(process.version);
console.log(process.versions);

//process function
console.log(process.cwd());
console.log(process.hrtime());
console.log(process.memoryUsage());
console.log(process.uptime());
