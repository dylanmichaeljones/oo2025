var eesnimi = "Dylan";
//let eesnimi:string=24234;
var vanus = 18;
console.log("Tere, " + eesnimi);
console.log("asfasd");
if (vanus < 13) {
    console.log("Tasuta");
}
else {
    console.log("Osta pilet!");
    if (vanus < 18) {
        console.log("Jeee, saad lapsepileti!");
    }
    else {
        console.log("Kahjuks pead ostma täiskasvanupileti.");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
