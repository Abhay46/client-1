function addV1(p1, p2) {
    var addition = p1 + p2;
    console.log("addition = " + addition);
}
// addV1(10, 20)
// addV1(10, '20')
// void add_v2(int p1, int p2) { .. }
function addV2(p1, p2) {
    var addition = p1 + p2;
    console.log("addition = " + addition);
}
// addV2(10, 20)
// addV2(10, '20')
// int add_v2(int p1, int p2) { .. }
function addV3(p1, p2) {
    var addition = p1 + p2;
    return '' + addition;
}
// const add1 = addV3(10, 20)
// console.log(`add1 = ${add1}, square = ${add1 * add1}`)
// function <functioname> (<param>:<param data type>, ..) : <return type> { .. }
function addV4(p1, p2) {
    var addition = p1 + p2;
    return addition;
}
var add4 = addV4(10, 20);
console.log("add4 = " + add4 + ", square = " + add4 * add4);
// subtraction -> 2 numbers and return a number
function subtraction(p1, p2) {
    return p1 - p2;
}
// concatination -> 2 strings and return a string
function concat(str1, str2) {
    return str1 + str2;
}
// cube -> 1 number and return number
function cube(p1) {
    return p1 * p1 * p1;
}
