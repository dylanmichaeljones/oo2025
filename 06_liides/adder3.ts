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

class StoringAdder implements Adder {
    protected store:number[]=[];             //Instead of maintaing a single sum, we store each number in an array
    add(nr:number){
        this.store.push(nr);
    }

    getSum(): number {  
        let sum: number = 0;                 //return the current sum
        for(let amount of this.store){sum+=amount;}
        return sum;
    }

    //new method to calculate and return the average of all the numberes added
    getAverage() {
        if(this.store.length>0) {
            return this.getSum()/this.store.length; //if the count is greater than 0 calculate
        }
        return 0;
    }
    getRange() {
        if(this.store.length==0){return 0;}
        let minimum: number=this.store[0];
        let maximum: number=minimum;
        for(let amount of this.store){
            if(amount<minimum){
                minimum=amount;
            }
            if(amount>maximum){
                maximum=amount;
            }
        }
        return maximum-minimum;
    }
}

let adder1: Adder = new CountingAdder;
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("koju");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
// adder1.add(3);
// adder1.add(5);
// adder1.add(2);
// console.log(adder1.getSum());
// adder1.reset();
// console.log(adder1.getSum());