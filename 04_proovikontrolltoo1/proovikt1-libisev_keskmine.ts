function aritmeetilineKeskmine(nr1:any, nr2:any, nr3:any) {
    let keskmine= 0;
    return keskmine = (nr1+nr2+nr3)/3;
}

function ak2(m:number[]):number{
    return m.reduce((a, b) => a+b);
}

function ak3(...args:number[]):number{
    return ak2(args);
}

function libisevKeskmine(massiiv:number[]):number[]{
    let uusmassiiv:number[]=[];
    for(let i=0; i < massiiv.length -2; i++){
        let keskmine= aritmeetilineKeskmine(massiiv[i], massiiv[i+1], massiiv[i+2]);
        uusmassiiv.push(keskmine);
    }
     return uusmassiiv;
}

function lk2(m:number[]):number[]{
    let v:number[]=[];
    let pikkus=3;
    for(let nr=0; nr<m.length-pikkus+1; nr++){
        v.push(ak2(m.slice(nr, nr+pikkus)))
    }
    return v;
}

let keskmine1=aritmeetilineKeskmine(1,2,3);
console.log(keskmine1);

console.log(libisevKeskmine([1,7,5,4,5]));
console.log(lk2([1,5,3,5,6]));

class Eksemplar {
    arvud:number[];
    constructor(arvud:number[]){
        this.arvud=arvud;
    }
    
    lisaArv(nr:number):void {
        this.arvud.push(nr);
    }

}

let eksemplar1= new Eksemplar([1,2,3,4,5])
console.log(eksemplar1);
eksemplar1.lisaArv(1);
console.log(eksemplar1);
