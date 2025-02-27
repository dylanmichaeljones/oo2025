var Triangle = /** @class */ (function () {
    function Triangle(x, y) {
        this.xCoordinates = x;
        this.yCoordinates = y;
    }
    Triangle.prototype.triangleCoordinates = function () {
        console.log("Kolmnurga x koordinaadid on: ", this.xCoordinates);
        console.log("Kolmnurga y koordinaadid on: ", this.yCoordinates);
    };
    Triangle.prototype.addCoordinates = function (x, y) {
        this.xCoordinates.push(x);
        this.yCoordinates.push(y);
    };
    Triangle.prototype.distance = function (x1, y1, x2, y2) {
        var xCoordinates = x2 - x1;
        var yCoordinates = y2 - y1;
        return Math.sqrt(xCoordinates * xCoordinates + yCoordinates * yCoordinates);
    };
    Triangle.prototype.perimeter = function () {
        var v = 0;
        for (var nr = 1; nr < this.xCoordinates.length; nr++) {
            v += this.distance(this.xCoordinates[nr - 1], this.yCoordinates[nr - 1], this.xCoordinates[nr], this.yCoordinates[nr]);
        }
        v += this.distance(this.xCoordinates[this.xCoordinates.length - 1], this.yCoordinates[this.yCoordinates.length - 1], this.xCoordinates[0], this.yCoordinates[0]);
        return v;
    };
    Triangle.prototype.draw = function (g) {
        for (var nr = 1; nr < this.xCoordinates.length; nr++) {
            g.moveTo(this.xCoordinates[nr - 1], this.yCoordinates[nr - 1]);
            g.lineTo(this.xCoordinates[nr], this.yCoordinates[nr]);
        }
        g.stroke();
    };
    return Triangle;
}());
var triangle1 = new Triangle([100, 200, 300], [200, 300, 40]);
var triangle2 = new Triangle([40, 50, 60], [100, 30, 40]);
triangle1.addCoordinates(70, 30);
triangle1.triangleCoordinates();
triangle2.triangleCoordinates();
triangle1.perimeter();
