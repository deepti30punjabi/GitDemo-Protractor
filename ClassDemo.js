"use strict";
exports.__esModule = true;
var ClassDemo = /** @class */ (function () {
    function ClassDemo(ssn) {
        this.ssn = ssn;
    }
    ClassDemo.prototype.getUserName = function () {
        return this.username;
    };
    ClassDemo.prototype.setUserName = function () {
        this.username = "hello";
    };
    ClassDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return ClassDemo;
}());
exports.ClassDemo = ClassDemo;
var cd = new ClassDemo(123);
cd.setUserName();
console.log(cd.getUserName());
console.log(cd.getSSN());
console.log(cd.getSSN());