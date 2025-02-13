//"c:\Program Files\nodejs\npm.cmd" install typescript ts-node
//npm i -D @types/node
//npx ts-node resistorrun.ts
class Resistor {
    r: number = 0;
    maxP : number = 0;
    constructor(r: number, maxP: number) {
      this.r = r; this.maxP = maxP;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
    getPower(u: number):number {
      return u * this.getCurrent(u);
    }

    isVoltageAllowed(u:number):boolean {
      return this.getPower(u)<=this.maxP;
    }
  }
  

  
  let r1: Resistor = new Resistor(220);
  console.log(r1.getCurrent(5));

  let r2: Resistor = new Resistor(110);
  console.log(r2.getCurrent(5));

  let r3: Resistor = new Resistor(4700);
  console.log(r3.getCurrent(5));

let Resistors:Resistor[]=[
    r1,
    r2,
    r3,
]

let sum = 0
for(let Resistor of Resistors){
    sum += Resistor.getCurrent(5);
}

console.log(sum)

console.log(Resistors.reduce((siiani, praegune) => siiani+praegune.getCurrent(5), 0));

let p1: Resistor = new Resistor()
