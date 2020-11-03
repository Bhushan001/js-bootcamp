/*
Have the function VowelCount(str) take the str string parameter being passed 
and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). 
Do not count y as a vowel for this challenge.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function VowelCount(str) {
    if (str.match(/[aeiou]/g)) {
        return str.match(/[aeiou]/g).length;
    } else {
        return 0;
    }
}

// Approach 2
function vowelCount2(str) {
    let vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}