// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const aCharMap = getCharMap(getWordChars(stringA));
//     const bCharMap = getCharMap(getWordChars(stringB));

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }
//     for (const char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function getWordChars(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase();
// }

// function getCharMap(str) {
//     const charMap = {};
//     for (const char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

function anagrams(strA, strB) {
    return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;