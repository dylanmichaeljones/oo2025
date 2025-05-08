interface IonData {
    getIonName(): string;
    getIonMassSum(): number;
    getIonCharge(): number;
}

interface SubstanceData {
    getSubstanceName(): string;
    getMolecularMass(): number;
}

export class Ion implements IonData {
    name: string;
    massSum: number;
    charge: number;
    constructor(name: string, massSum: number, charge: number) {
        this.name = name;
        this.massSum = massSum;
        this.charge = charge;
    }

    getIonName(): string {
        return this.name;
    }

    getIonMassSum() {
        return this.massSum;
    }

    getIonCharge(): number {
        return this.charge;
    }
}

export class Substance implements SubstanceData {
    name: string;
    molecularMass: number;

    constructor(ion1: Ion, ion2: Ion) {
        if (ion1.getIonCharge() + ion2.getIonCharge() !== 0) {
            throw new Error("Laengud peavad olema võrdsed ja vastasmärgilised!");
        } else {
            let positiveIon;
            let negativeIon;

            if(ion1.getIonCharge() > 0) {
                positiveIon = ion1;
                negativeIon = ion2
            } else {
                positiveIon = ion2;
                negativeIon = ion1;
            }
            this.name = positiveIon.getIonName() + negativeIon.getIonName();
            this.molecularMass = ion1.getIonMassSum() + ion2.getIonMassSum();
        }
    }

    getSubstanceName(): string {
        return this.name;
    }

    getMolecularMass(): number {
        return this.molecularMass;
    }
}

export class IonArray implements SubstanceData {
    ions: Ion[];
    name: string;
    molecularMass: number;
    constructor(ions: Ion[]) {
        this.ions = ions;
        let chargeSum = 0;
        for(let ion of ions) {
            chargeSum += ion.getIonCharge();
        }
        if(chargeSum !== 0) {
            throw new Error("Ainete summa ei ole 0!");
        }

        this.molecularMass = 0;
        for(let ion of ions) {
            this.molecularMass += ion.getIonMassSum();
        }

        let ionCount: {[name: string]: number } = {};
        for (let ion of ions) {
            let name = ion.getIonName();
            if (ionCount[name]) {
                ionCount[name] += 1;
            } else {
                ionCount[name] = 1;
            }
        }

        let positiveIons: string[] = [];
        let negativeIons: string[] = [];
        for(let ion of ions) {
            let name = ion.getIonName();
            if(ion.getIonCharge() > 0) {
                positiveIons.push(name);
            } else {
                negativeIons.push(name);
            }
        }

        this.name = "";
        for(let name of positiveIons) {
            this.name += name;
        }
        if (ionCount[this.name] > 1) {
            this.name += ionCount[this.name];
        }
        for (let name of negativeIons) {
            this.name += name;
        }
        if (ionCount[this.name] > 1) {
            this.name += ionCount[this.name];
        }
    }
    
    getSubstanceName(): string {
        return this.name;
    }

    getMolecularMass(): number {
        return this.molecularMass;
    }
}


let calcium = new Ion('Ca', 40.08, 2);
let chloride = new Ion('Cl', 35.45, -1);

const ionsArray = new IonArray([calcium, chloride, chloride]);
console.log(ionsArray.getSubstanceName());
console.log(ionsArray.getMolecularMass());





function addIon() {
    
}
