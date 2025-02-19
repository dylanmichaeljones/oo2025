class täring {
    küljed: number = 0;

    constructor(küljed: number){
        this.küljed = küljed;
    }

    täringuvise(): number{
        return Math.floor(Math.random() * this.küljed) + 1;
    }

}

let d6 = new täring(6);
let d20 = new täring(20);

console.log(d6.täringuvise());
console.log(d20.täringuvise());