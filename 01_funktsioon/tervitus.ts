let eesnimi:string="Dylan";
//let eesnimi:string=24234;
let vanus:number=18;
console.log("Tere, "+eesnimi);
console.log("asfasd");

if(vanus < 13){
    console.log("Tasuta");
} else {
    console.log("Osta pilet!");
    if(vanus < 18){
        console.log("Jeee, saad lapsepileti!");
    } else {
        console.log("Kahjuks pead ostma täiskasvanupileti.");
    }
}
let symbolid:string[]=[];
for(let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}
console.log(symbolid.join(""));