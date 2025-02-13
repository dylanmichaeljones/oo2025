//"c:\Program Files\nodejs\npm.cmd" install typescript ts-node
//npm i -D @types/node
//npx ts-node resistorrun.ts
var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = 0;
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    return Resistor;
}());
var r1 = new Resistor(220);
console.log(r1.getCurrent(5));
var r2 = new Resistor(110);
console.log(r2.getCurrent(5));
var r3 = new Resistor(4700);
console.log(r3.getCurrent(5));
var Resistors = [
    r1,
    r2,
    r3,
];
var sum = 0;
for (var _i = 0, Resistors_1 = Resistors; _i < Resistors_1.length; _i++) {
    var Resistor_1 = Resistors_1[_i];
    sum += Resistor_1.getCurrent(5);
}
console.log(sum);
console.log(Resistors.reduce(function (siiani, praegune) { return siiani + praegune.getCurrent(5); }, 0));
