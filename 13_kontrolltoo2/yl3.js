"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IonArray = exports.Substance = exports.Ion = void 0;
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
var IonArray = /** @class */ (function () {
    function IonArray(ions) {
        this.ions = ions;
        var chargeSum = 0;
        for (var _i = 0, ions_1 = ions; _i < ions_1.length; _i++) {
            var ion = ions_1[_i];
            chargeSum += ion.getIonCharge();
        }
        if (chargeSum !== 0) {
            throw new Error("Ainete summa ei ole 0!");
        }
        this.molecularMass = 0;
        for (var _a = 0, ions_2 = ions; _a < ions_2.length; _a++) {
            var ion = ions_2[_a];
            this.molecularMass += ion.getIonMassSum();
        }
        var ionCount = {};
        for (var _b = 0, ions_3 = ions; _b < ions_3.length; _b++) {
            var ion = ions_3[_b];
            var name_1 = ion.getIonName();
            if (ionCount[name_1]) {
                ionCount[name_1] += 1;
            }
            else {
                ionCount[name_1] = 1;
            }
        }
        var positiveIons = [];
        var negativeIons = [];
        for (var _c = 0, ions_4 = ions; _c < ions_4.length; _c++) {
            var ion = ions_4[_c];
            var name_2 = ion.getIonName();
            if (ion.getIonCharge() > 0) {
                positiveIons.push(name_2);
            }
            else {
                negativeIons.push(name_2);
            }
        }
        this.name = "";
        for (var _d = 0, positiveIons_1 = positiveIons; _d < positiveIons_1.length; _d++) {
            var name_3 = positiveIons_1[_d];
            this.name += name_3;
        }
        if (ionCount[this.name] > 1) {
            this.name += ionCount[1];
        }
        for (var _e = 0, negativeIons_1 = negativeIons; _e < negativeIons_1.length; _e++) {
            var name_4 = negativeIons_1[_e];
            this.name += name_4;
        }
        if (ionCount[this.name] > 1) {
            this.name += ionCount[1];
        }
    }
    IonArray.prototype.getSubstanceName = function () {
        return this.name;
    };
    IonArray.prototype.getMolecularMass = function () {
        return this.molecularMass;
    };
    return IonArray;
}());
exports.IonArray = IonArray;
var calcium = new Ion('Ca', 40.08, 2);
var chloride = new Ion('Cl', 35.45, -1);
var ionsArray = new IonArray([calcium, chloride, chloride]);
console.log(ionsArray.getSubstanceName());
console.log(ionsArray.getMolecularMass());
