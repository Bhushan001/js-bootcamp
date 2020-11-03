/*
Have the function SimpleSymbols(str) take the str parameter being passed 
and determine if it is an acceptable sequence by either returning the string true or false. 
The str parameter will be composed of + and = symbols with several characters between them 
(ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
So the string to the left would be false. The string will not be empty and will have at least one letter.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function SimpleSymbols(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let arr = str.split('');
    let chars = [];
    let flag = false;
    for (let char of arr) {
        if (alphabets.includes(char)) {
            chars.push(char);
        }
    }
    for (let i = 0; i < chars.length; i++) {
        let charIndex = str.indexOf(chars[i]);
        if (str[charIndex - 1] === '+' && str[charIndex + 1] === '+') {
            flag = true;
        } else {
            flag = false;
            return flag;
        }
    }
    // code goes here  
    return flag;
}

// Approach 2
function SimpleSymbols2(str) {
    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
        return false;
    } else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    } else {
        return true;
    }
}

// Approach 3
function SimpleSymbols3(str) {

    // code goes here  
    if (str.match(/[^+][A-Za-z][^+]/g)) return false;
    else if (str.match(/[+][A-Za-z][^+]/g)) return false;
    else if (str.match(/[^+][A-Za-z][+]/g)) return false;
    return true;
}