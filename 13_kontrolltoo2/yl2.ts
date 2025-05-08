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