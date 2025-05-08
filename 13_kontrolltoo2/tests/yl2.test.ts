import {Ion} from "../yl1";
import {Substance} from "../yl2";

test("ionic compound test", () => {
    let na = new Ion("Na+", 22.989, 1);
    let cl = new Ion("Cl-", 35.45, -1);
    let nacl = new Substance(na, cl);
    expect(nacl.getSubstanceName()).toBe("Na+Cl-");
    expect(nacl.getMolecularMass()).toBeCloseTo(58.439);
    let ca = new Ion("Ca2+", 40.078, 2);
    let o = new Ion("O2-", 15.999, -2);
    let cao = new Substance(ca, o);
    expect(cao.getSubstanceName()).toBe("Ca2+O2-");
    expect(cao.getMolecularMass()).toBeCloseTo(56.077);
});

test("non-ionic compound test", () => {
    let ca = new Ion("Ca2+", 40.078, 2);
    let cl = new Ion("Cl-", 35.45, -1);
    expect(() => new Substance(ca, cl)).toThrow("Laengud peavad olema võrdsed ja vastasmärgilised!");
});