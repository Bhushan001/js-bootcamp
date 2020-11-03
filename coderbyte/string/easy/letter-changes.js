/*
Letter Changes
HIDE QUESTION
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
// Approach 1
function LetterChanges(str) {
    let validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (validCharacters.includes(str[i])) {
            let char = str.charCodeAt(i);
            newString += (str[i] === 'z' || str[i] === 'Z') ? String.fromCharCode(char - 25) : String.fromCharCode(char + 1);
        } else {
            newString += str[i];
        }
    }
    let vowels = 'aeiou';
    let finalString = '';
    // capitlize vowels
    for (let i = 0; i < newString.length; i++) {
        if (vowels.includes(newString[i])) {
            finalString += newString[i].toUpperCase();
        } else {
            finalString += newString[i];
        }
    }
    return finalString;
}

// Approach 2
function LetterChanges2(str) {
    str = str.trim().toLowerCase();
    var len = str.length;
    var newStr = '';
    for (var i = 0; i < len; i++) {
        if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
            newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97)
        } else if (/[zdhnt]/.test(str[i])) {
            newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
// Approach 3
function LetterChanges3(str) {
    str = str.replace(/[a-zA-Z]/g, function(ch) {
        if (ch === 'z') return 'a';
        else if (ch === 'Z') return 'A';
        else return String.fromCharCode(ch.charCodeAt(0) + 1);
    });

    return str.replace(/[aeiou]/g, function(ch) {
        return ch.toUpperCase();
    });
}

// Approach 4

function LetterChanges4(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    let newStr = '';
    let filterStr = '';
    for (let char of str) {
        if (alphabets.includes(char)) {
            newStr += alphabets[alphabets.indexOf(char) + 1];
        } else {
            newStr += char;
        }
    }
    for (let char of newStr) {
        if (vowels.includes(char)) {
            filterStr += newStr[newStr.indexOf(char)].toUpperCase();
        } else {
            filterStr += char;
        }
    }
    // code goes here  
    return filterStr;

}