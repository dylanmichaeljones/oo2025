import {Word} from "../yl1";

test("lettercount test", () =>{
    let word = new Word("pere");
    expect(word.letterCounter("e")).toBe(2);
    expect(word.letterCounter("p")).toBe(1);
    expect(word.letterCounter("r")).toBe(1);
});