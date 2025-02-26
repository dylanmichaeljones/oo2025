class Ball {
    ctx: any;
    x: any;
    y: any;
    radius: any;
    deltax: any;
    deltay: any;
    gravity: number;
    friction: number;
    constructor(ctx, x, y, radius, deltax, deltay) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.deltax = deltax;
        this.deltay = deltay;

        this.gravity = 0.5;
        this.friction = 1;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }

    ballMovement(canvas: HTMLCanvasElement) {
        this.deltay += this.gravity; 
        this.x += this.deltax;
        this.y += this.deltay;
    
        //Põrkab alt
        if (this.y + this.radius > canvas.height) {
            this.y = canvas.height - this.radius; 
            this.deltay = -this.deltay * this.friction; 
        }
    
        // Põrkab ülevalt
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.deltay = -this.deltay * this.friction;
        }
    
        // Põrkab külgedelt
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.deltax = -this.deltax * this.friction; 
        }
    
        this.drawBall();
    }
}