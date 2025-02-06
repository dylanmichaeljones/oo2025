function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
//console.log(kehamassiindeks(175, 80));
var massid = [70, 80, 90, 100];
//for(let mass of massid){
//  console.log(kehamassiindeks(175, mass));
//}
var indeksid = massid.map(function (mass) { return kehamassiindeks(175, mass); });
console.log("Siin on esimese valemiga indeksid: ", indeksid);
//Looge teine valem kehamassiindeksi arvutamiseks:
//1,3 korda kehakaal jaagatud pikkusega astmes 2,5
//aitab kasklus math.pow
//arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
//naidake, kuidas vaartused erinevad
function kehamassiindeks2(cm, kg) {
    var m = cm / 100;
    return 1.3 * (kg / Math.pow(m, 2.5));
}
//for(let mass of massid){
//  console.log(kehamassiindeks2(175, mass))
//}
var indeksid2 = massid.map(function (mass) { return kehamassiindeks2(175, mass); });
console.log("Ning siin on teise valemiga indeksid: ", indeksid2);
//arvutage m6lema valemiga sama massi ja eri pikkuste juures
var vastus = [];
for (var pikkus = 150; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
