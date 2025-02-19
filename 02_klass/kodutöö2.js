var täring = /** @class */ (function () {
    function täring(küljed) {
        this.küljed = 0;
        this.küljed = küljed;
    }
    täring.prototype.täringuvise = function () {
        return Math.floor(Math.random() * this.küljed) + 1;
    };
    return täring;
}());
var d6 = new täring(6);
var d20 = new täring(20);
console.log(d6.täringuvise());
console.log(d20.täringuvise());
