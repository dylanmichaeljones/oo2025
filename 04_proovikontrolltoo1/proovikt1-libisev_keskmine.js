function aritmeetilineKeskmine(nr1, nr2, nr3) {
    var keskmine = 0;
    return keskmine = (nr1 + nr2 + nr3) / 3;
}
function ak2(m) {
    return m.reduce(function (a, b) { return a + b; });
}
function ak3() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return ak2(args);
}
function libisevKeskmine(massiiv) {
    var uusmassiiv = [];
    for (var i = 0; i < massiiv.length - 2; i++) {
        var keskmine = aritmeetilineKeskmine(massiiv[i], massiiv[i + 1], massiiv[i + 2]);
        uusmassiiv.push(keskmine);
    }
    return uusmassiiv;
}
function lk2(m) {
    var v = [];
    var pikkus = 3;
    for (var nr = 0; nr < m.length - pikkus + 1; nr++) {
        v.push(ak2(m.slice(nr, nr + pikkus)));
    }
    return v;
}
var keskmine1 = aritmeetilineKeskmine(1, 2, 3);
console.log(keskmine1);
console.log(libisevKeskmine([1, 7, 5, 4, 5]));
console.log(lk2([1, 5, 3, 5, 6]));
var Eksemplar = /** @class */ (function () {
    function Eksemplar(arvud) {
        this.arvud = arvud;
    }
    Eksemplar.prototype.lisaArv = function (nr) {
        this.arvud.push(nr);
    };
    return Eksemplar;
}());
var eksemplar1 = new Eksemplar([1, 2, 3, 4, 5]);
console.log(eksemplar1);
eksemplar1.lisaArv(1);
console.log(eksemplar1);
