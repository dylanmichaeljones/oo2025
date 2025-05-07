interface Taheloendaja {
    letterCounter(letter: string): number;
}

abstract class Text implements Taheloendaja {
    constructor() {}

   abstract askForContent(): string;

   letterCounter(letter: string): number {
        let count = 0;
        for(let char of this.askForContent()) {
            if (char === letter) {
                count++;
            };
        }
        return count;
   }
}


export class Word extends Text {
    word: string;

    constructor(word: string) {
        super();
        this.word = word;
    }
    
    letterCounter(letter: string): number {
        let count = 0;
        for(let i=0; i < this.word.length; i++) {
            if(this.word[i] == letter) {
                count += 1;
            }
        }
        return count;
    }

    askForContent(): string {
        return this.word;
    }
}

export class Sentence extends Text {
    protected words: Word[] = [];

    constructor(sentence: string) {
        super();
        this.words = sentence.split(" ").map(word => new Word(word))
    }

    letterCounter(letter: string): number {
        let count = 0;
        for(let word of this.words) {
            count += word.letterCounter(letter);
        }
        return count;
    }

    askForContent(): string {
        return this.words.map(word => word.askForContent()).join(" ");
    }
}