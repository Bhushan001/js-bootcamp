// Apporach 1
function reverse1(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Approach 2
function reverse2(str) {
    // code goes here  
    return str.split('').reverse().join('');

}

// Approach 3
function reverse3(str) {
    var reversedStr = "";
    for (i = str.length - 1; i > 0 - 1; i--) { reversedStr += str[i]; }
    return reversedStr;
}