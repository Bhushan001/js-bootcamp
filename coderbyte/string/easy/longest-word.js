/*
Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
// Approach 1
function longestWord(sen) {
    // code goes here  
    let arr = sen.split(' ');
    let newArr = [];
    for (let word of arr) {
        newArr.push(word.replace(/[^\w]/g, ''));
    }
    let longest;
    let length = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > length) {
            length = newArr[i].length;
            longest = newArr[i];
        }
    }
    return longest;
}

// Approach 2
function longestWord2(sen) {

    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Zsd]/g, '');
    var arr = sen.split(' ');
    arr.sort(function(a, b) { return b.length - a.length });
    return arr.shift();
    // code goes here  
    return sen;

}

// Approach 3
function longestWord3(sen) {
    let arr = sen.match(/[a-z0-9]+/gi);
    let sorted = arr.sort(function(a, b) { return b.length - a.length; });
    return sorted[0];

}