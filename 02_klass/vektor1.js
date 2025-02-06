"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vektor = /** @class */ (function () {
    function vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    vektor.prototype.pikkus = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    vektor.prototype.liida = function (teine) {
        return new vektor(this.x + teine.x, this.y + teine.y);
    };
    //loo k2sklus vektori korrutamiseks arvuga
    vektor.prototype.korruta = function (arv) {
        return new vektor(this.x * arv, this.y * arv);
    };
    vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    //leia kahe vektori skalaarkorrutis
    vektor.prototype.skalaarkorrutis = function (teine) {
        return this.x * teine.x + this.x * teine.y;
    };
    return vektor;
}());
//loo massiiv neljast vektorist
//leia nende k6igi summa
var vektorid = [
    new vektor(1, 3),
    new vektor(5, 3),
    new vektor(2, 6),
    new vektor(3, 4),
];
var asukoht = vektorid[0];
for (var i = 1; i < vektorid.length; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
var v1 = new vektor(3, 5);
var vagun = new vektor(9, -4);
var energia = v1.skalaarkorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
v1.korruta(4).kuva();
v1.kuva();
console.log(v1.pikkus());
var v3 = v1.liida(new vektor(1, 2));
v3.kuva();
