import {Sentence} from "../yl2";

test("lettercount test", () => {
    let sentence = new Sentence("Hunt sööb metsas võileiba.");
    expect(sentence.letterCounter("ö")).toBe(2);
});