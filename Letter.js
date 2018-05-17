// constructor function for creating Letter objects
var Letter = function (char) {
    this.char = char;
    this.hasGuessed = false;

};

Letter.prototype.toString = function () {
    if (this.hasGuessed === true) {
        return this.char;
    }
    return "_";
};

Letter.prototype.checkInput = function (char) {
    if (this.char.toLowerCase() === char.toLowerCase()) {
        this.hasGuessed = true;
        return true;
    }
    return false;
};


// exporting our Letter constructor
module.exports = Letter;
