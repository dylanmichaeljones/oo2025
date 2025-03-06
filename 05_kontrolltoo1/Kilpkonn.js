var Turtle = /** @class */ (function () {
    function Turtle(ctx, x, y, direction) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    Turtle.prototype.printLocation = function () {
        console.log("Kilpkonn asub x".concat(this.x, " ja y").concat(this.y, " koordinaatidel ning liigub ").concat(this.direction, "."));
    };
    Turtle.prototype.moveForward = function () {
        if (this.direction == "paremale") {
            this.x += 10;
        }
        else if (this.direction == "alla") {
            this.y += 10;
        }
        else if (this.direction == "vasakule") {
            this.x -= 10;
        }
        else if (this.direction == "üles") {
            this.y -= 10;
        }
    };
    Turtle.prototype.turnRight = function () {
        var directions = ["paremale", "alla", "vasakule", "üles"];
        var newDirection = directions.indexOf(this.direction);
        this.direction = directions[(newDirection + 1) % 4];
    };
    Turtle.prototype.drawTurtle = function () {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, 50, 50);
        this.ctx.strokeStyle = "brown";
        this.ctx.stroke();
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    };
    Turtle.prototype.proximityWarning = function (turtle2) {
        var centerx = this.x + 50 / 2;
        var centery = this.y + 50 / 2;
        var centerx2 = turtle2.x + 50 / 2;
        var centery2 = turtle2.y + 50 / 2;
        var proximityDistance = Math.sqrt(Math.pow((centerx - centerx2), 2) + Math.pow((centery - centery2), 2));
        if (proximityDistance < 60) {
            alert("Hoiatus! Kilpkonnad on liiga lähedal!");
        }
        ;
    };
    return Turtle;
}());
var turtle1 = new Turtle(this.ctx, 100, 200, "vasakule");
turtle1.printLocation();
turtle1.turnRight();
turtle1.printLocation();
turtle1.turnRight();
turtle1.printLocation();
