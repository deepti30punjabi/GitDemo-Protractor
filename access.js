"use strict";
exports.__esModule = true;
var ClassDemo_1 = require("./ClassDemo");
var acd = new ClassDemo_1.ClassDemo(123);
acd.setUserName();
acd.getUserName();
acd.getSSN();
function validate(value) {
    console.log(value);
}
validate("world");
function validateNum(value) {
    return value + 1;
}
console.log(validateNum(2));
var Bmw = {
    color: "Red",
    engine: 100,
    camera: true
};
function validateObj(car) {
    console.log(car.engine);
    console.log(car.camera);
}
validateObj(Bmw);
