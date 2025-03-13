interface Adder {
    add(nr:number):void;          //A method to add a number
    getSum():number;              //A method to return the current sum
    reset():void;
}

class CharCounter {
    constructor(protected adder: Adder) {}
    //add the number of characters in a given word to the Adder
    //method which is designed to take a word (a string)
        addWordCharacters(word: String): void {
            //word length gives the number of characters in the word
            this.adder.add(word.length);
        }
        //retrieve the total character count stored in the adder
        getCharacterCount(): number {
            return this.adder.getSum(); //Call the get sum() from the adder to get the total amount
        }
        
    }

class SimpleAdder implements Adder {
    protected sum: number=0;             //Initial sum is 0. Without the initial value, the sum would be undefined.
    add(nr:number){this.sum += nr;}
    getSum(): number {                   //return the current sum
        return this.sum;
    }
    reset(): void {
        this.sum=0;
    }
}

let adder1: Adder = new SimpleAdder;
let counter1: CharCounter = new CharCounter(adder1);
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