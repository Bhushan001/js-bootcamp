/**
 * Palindrome
 * Have the function Palindrome(str) take the str parameter being passed 
 * and return the string true if the parameter is a palindrome, 
 * (the string is the same forward as it is backward) otherwise return the string false.
 * For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
 * Use the Parameter Testing feature in the box below to test your code with different arguments.
 */
function palindrome(str) {
    const regex = /\s/g;
    // alternative regex can be str.replace(/W/g,"");
    // code goes here 
    return str.replace(regex, '') === str.replace(regex, '').split('').reverse().join('');

}

// Approach 2
function palindrome2(str) {
    str = str.replace(/ /g, '');
    for (let i = 0, max = Math.floor(str.length / 2); i < max; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}