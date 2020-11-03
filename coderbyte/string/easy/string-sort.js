/*
Alphabet Soup
HIDE QUESTION
Have the function AlphabetSoup(str) take the str string parameter being passed 
and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function alphabetSoup(str) {
    // code goes here  
    return str.split('').sort().join('');
}

// Approach 2
function alphabetSoup2(str) {
    // code goes here  
    return str.split('').sort(function(ch1, ch2) {
        return ch1.charCodeAt(0) - ch2.charCodeAt(0);
    }).join('');
}