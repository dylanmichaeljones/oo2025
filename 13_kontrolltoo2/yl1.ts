interface IonData {
    getIonName(): string;
    getIonMassSum(): number;
    getIonCharge(): number;
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