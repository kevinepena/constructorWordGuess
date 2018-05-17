
var Letter = require("./Letter");

var Word = function(word) {
    this.word = word;
    var wordArr = this.word.split("");
    this.letterArr = wordArr.map(function (char) {
        return new Letter(char);
    });

}

Word.prototype.toString = function () {
    return this.letterArr.join(" ")
};

Word.prototype.isCorrect = function (char) {
    var isUserCorrect = false;
    this.letterArr.foreach(function(letter) {
        if (letter.checkInput(char)) {
            isUserCorrect = true;
        }
    });
};

Word.prototype.isAllCorrect = function (char) {
    var isUserCorrect = false;
    this.letterArr.foreach(function(letter) {
        if (letter.checkInput(char)) {
            isUserCorrect = false;
            
        }
    });
};

module.exports = Word;
