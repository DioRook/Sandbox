const obj1 = {
    name: 'adi',
    age: 23,
    job: 'student'
}
const obj2 = {
    name: 'stev',
    age: 19,
    job: 'teacher'
}
const obj3 = {
    name: 'jane',
    age: 20,
    job: 'police'
}
const obj4 = {
    name: 'dev',
    age: 30,
    job: 'soldie'
}
console.group()
console.log("Group1");
console.log("[index.js] Console.log");
console.info("[index.js] Console.info");
console.error("[index.js] Console.error");
console.warn("[index.js] Console.warn");
console.debug("[index.js] Console.debug");
console.groupCollapsed()
console.log("Group2");
console.table([obj1, obj2, obj3, obj4]);
console.groupEnd();
console.groupEnd();
console.log('%cThis is fancy msg with "string":%s, "integer":%d, "object":%o ', 'color:white;background:teal', 'Some String', 33, obj1);
console.assert(5 % 2 === 2, {error: 'error'})
console.count("label");
console.count("label");
console.count("label");
console.dir(obj1)
console.log(document.getElementsByTagName('div'))




