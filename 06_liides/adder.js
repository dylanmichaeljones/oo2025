var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    //add the number of characters in a given word to the Adder
    //method which is designed to take a word (a string)
    CharCounter.prototype.addWordCharacters = function (word) {
        //word length gives the number of characters in the word
        this.adder.add(word.length);
    };
    //retrieve the total character count stored in the adder
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); //Call the get sum() from the adder to get the total amount
    };
    return CharCounter;
}());
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //Initial sum is 0. Without the initial value, the sum would be undefined.
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder;
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("koju");
console.log(counter1.getCharacterCount());
// adder1.add(3);
// adder1.add(5);
// adder1.add(2);
// console.log(adder1.getSum());
// adder1.reset();
// console.log(adder1.getSum());
