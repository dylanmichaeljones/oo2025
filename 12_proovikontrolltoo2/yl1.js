"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
    }
    Word.prototype.letterCounter = function (letter) {
        var count = 0;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
                count += 1;
            }
        }
        return count;
    };
    return Word;
}());
exports.Word = Word;
