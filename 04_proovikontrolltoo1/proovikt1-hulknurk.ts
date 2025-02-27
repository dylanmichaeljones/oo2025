class Triangle {
    xCoordinates:number[];
    yCoordinates:number[];

    constructor(x:number[], y:number[]) {
        this.xCoordinates=x;
        this.yCoordinates=y;   
    }

    triangleCoordinates() {
        console.log("Kolmnurga x koordinaadid on: ", this.xCoordinates);
        console.log("Kolmnurga y koordinaadid on: ", this.yCoordinates);
    }

    addCoordinates(x:number, y:number) {
        this.xCoordinates.push(x);
        this.yCoordinates.push(y);
    }
    
    
     distance(x1:number, y1:number, x2:number, y2:number) {
        let xCoordinates:number = x2-x1;
        let yCoordinates:number = y2-y1;
        return Math.sqrt(xCoordinates*xCoordinates+yCoordinates*yCoordinates);
     }

     perimeter():number {
        let v:number=0;
        for(let nr=1; nr<this.xCoordinates.length; nr++){
            v+=this.distance(this.xCoordinates[nr-1], this.yCoordinates[nr-1], this.xCoordinates[nr], this.yCoordinates[nr])
        }
        v+=this.distance(this.xCoordinates[this.xCoordinates.length-1], this.yCoordinates[this.yCoordinates.length-1], this.xCoordinates[0], this.yCoordinates[0]);
        return v;
     }
    
     draw(g:any):void{
        g.beginPath()
        g.moveTo(this.xCoordinates[0], this.yCoordinates[0]);
        for(let nr=1; nr<this.xCoordinates.length; nr++){
            g.lineTo(this.xCoordinates[nr], this.yCoordinates[nr]);
        }
        g.lineTo(this.xCoordinates[0], this.yCoordinates[0]);
        g.stroke();
     }
}
     
let triangle1 = new Triangle([100, 200, 300], [200, 300, 40]);
let triangle2 = new Triangle([40, 50, 60], [100, 30, 40])
triangle1.addCoordinates(70, 30);
triangle1.triangleCoordinates();
triangle2.triangleCoordinates();

console.log(triangle1.perimeter());
