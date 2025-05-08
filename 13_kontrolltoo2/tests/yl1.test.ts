import {Ion} from "../yl1";

test("Ion test", () =>{
    let hydrogen = new Ion("H+", 1.008, 1);
    expect(hydrogen.getIonName()).toBe("H+");
    expect(hydrogen.getIonMassSum()).toBe(1.008);
    expect(hydrogen.getIonCharge()).toBe(1);
    let nitrate = new Ion("NO3-", 62.0049, -1);
    expect(nitrate.getIonName()).toBe("NO3-");
    expect(nitrate.getIonMassSum()).toBe(62.0049);
    expect(nitrate.getIonCharge()).toBe(-1);
});