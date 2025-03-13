interface Adder {
    add(nr:number):void;          //A method to add a number
    getSum():number;              //A method to return the current sum
    getAverage():number;
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

class CountingAdder implements Adder {
    protected sum: number=0;             //Initial sum is 0. Without the initial value, the sum would be undefined.
    protected count: number=0; //initialize the count is 0. This will ttrack how many numbers have been added
    add(nr:number){
        this.sum += nr;
        this.count++;
    } // add the given number to sum

    getSum(): number {                   //return the current sum
        return this.sum;
    }

    //new method to calculate and return the average of all the numberes added
    getAverage() {
        if(this.count>0) {
            return this.sum/this.count; //if the count is greater than 0 calculate
        }
        return 0;
    }
    reset(): void {
        this.sum=0;
    }
}

let adder1: Adder = new CountingAdder;
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("koju");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
// adder1.add(3);
// adder1.add(5);
// adder1.add(2);
// console.log(adder1.getSum());
// adder1.reset();
// console.log(adder1.getSum());