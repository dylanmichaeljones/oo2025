interface Taheloendaja {
    letterCounter(letter: string): number;
}

export class Word implements Taheloendaja {
    word: string;

    constructor(word: string) {
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
}

export class Sentence implements Taheloendaja {
    words: Word[] = [];

    constructor(sentence: string) {
        this.words = sentence.split(" ").map(word => new Word(word))
    }

    letterCounter(letter: string): number {
        let count = 0;
        for(let word of this.words) {
            count += word.letterCounter(letter);
        }
        return count;
    }       
}