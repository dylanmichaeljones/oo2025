class Turtle {
    ctx:any;
    x:number;
    y:number;
    direction:string;

    constructor(ctx, x, y, direction) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    printLocation() {
        console.log(`Kilpkonn asub x${this.x} ja y${this.y} koordinaatidel ning liigub ${this.direction}.`);
    }
        
    moveForward() {
        if(this.direction == "paremale") {
            this.x += 10;
        }
        else if(this.direction == "alla") {
            this.y += 10;
        }
        else if(this.direction == "vasakule") {
            this.x -= 10;
        }
        else if(this.direction == "üles") {
            this.y -= 10;
        }

    }

    turnRight() {
        let directions = ["paremale", "alla", "vasakule", "üles"]
        let newDirection = directions.indexOf(this.direction)
        this.direction = directions[(newDirection + 1) % 4]
    }

    drawTurtle() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, 50, 50);
        this.ctx.strokeStyle = "brown";
        this.ctx.stroke();
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    proximityWarning(turtle2: Turtle) {
        let centerx = this.x + 50 / 2;
        let centery = this.y + 50 / 2;
        let centerx2 = turtle2.x + 50 /2;
        let centery2 = turtle2.y + 50 /2;
        let proximityDistance = Math.sqrt(Math.pow((centerx - centerx2), 2) + Math.pow((centery - centery2), 2));
        if(proximityDistance < 60) {
            alert("Hoiatus! Kilpkonnad on liiga lähedal!");
        };
    }
}

let turtle1 = new Turtle(this.ctx, 100, 200, "vasakule");

turtle1.printLocation();
turtle1.turnRight();
turtle1.printLocation();
turtle1.turnRight();
turtle1.printLocation();