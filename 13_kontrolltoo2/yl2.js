"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Substance = exports.Ion = void 0;
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
var Substance = /** @class */ (function () {
    function Substance(ion1, ion2) {
        if (ion1.getIonCharge() + ion2.getIonCharge() !== 0) {
            throw new Error("Laengud peavad olema võrdsed ja vastasmärgilised!");
        }
        else {
            var positiveIon = void 0;
            var negativeIon = void 0;
            if (ion1.getIonCharge() > 0) {
                positiveIon = ion1;
                negativeIon = ion2;
            }
            else {
                positiveIon = ion2;
                negativeIon = ion1;
            }
            this.name = positiveIon.getIonName() + negativeIon.getIonName();
            this.molecularMass = ion1.getIonMassSum() + ion2.getIonMassSum();
        }
    }
    Substance.prototype.getSubstanceName = function () {
        return this.name;
    };
    Substance.prototype.getMolecularMass = function () {
        return this.molecularMass;
    };
    return Substance;
}());
exports.Substance = Substance;
