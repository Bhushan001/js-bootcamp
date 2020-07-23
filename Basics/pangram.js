function isPangram(sentence) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (sentence.toLowerCase().indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram(`Fake bugs put in wax jonquils drive him crazy`));