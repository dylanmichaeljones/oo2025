let noodid = ["C", "C#", "D", "D#", "E", "F","F#","G", "G#", "A", "A#","B"];
let keelte_noodid = {1:4, 2:9, 3:2, 4:7, 5:11};

//Funktsioon leiab keele ning krihvi järgi noodi nimetuse kitarrikaelal
function noodileidmine(keel:number, krihv:number):string {
    let leitav_noot:number = (keelte_noodid[keel] + krihv) % 12;
    let noodinimi:string = noodid[leitav_noot];
    return noodinimi;
}

console.log(noodileidmine(2, 5));
