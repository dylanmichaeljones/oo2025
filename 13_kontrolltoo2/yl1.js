"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ion = void 0;
var Ion = /** @class */ (function () {
    function Ion(name, massSum, charge) {
        this.name = name;
        this.massSum = massSum;
        this.charge = charge;
    }
    Ion.prototype.getIonName = function () {
        return this.name;
    };
    Ion.prototype.getIonMassSum = function () {
        return this.massSum;
    };
    Ion.prototype.getIonCharge = function () {
        return this.charge;
    };
    return Ion;
}());
exports.Ion = Ion;
