/*
Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, 
which will contain only two strings, the first parameter being the string N and 
the second parameter being a string K of some characters, 
and your goal is to determine the smallest substring of N that contains all the characters in K. 

For example: 

if strArr is ["aaabaaddae", "aed"] then the smallest substring of N 
that contains the characters a, e, and d is "dae" located at the end of the string. 
So for this example your program should return the string dae.

Another example: 

if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N 
that contains all of the characters in K is "aabd" which is located at the beginning of the string. 
Both parameters will be strings ranging in length from 1 to 50 characters 
and all of K's characters will exist somewhere in the string N. 
Both strings will only contains lowercase alphabetic characters.

Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
*/
function MinWindowSubstring(strArr) {
    let str = strArr[0];
    let needle = strArr[1].split('');
    //start with the smallest possible substrings, then go up
    for (let i = needle.length, len = str.length; i <= len; i++) {
        for (j = 0; j <= len - i; j++) {
            let mySlice = str.substr(j, i);
            if (isContained(mySlice)) {
                return mySlice;
            }
        }
    }
    return 'Not in string';
    // ---------------------- helpers -----------------------------
    //isContained checks to see if all the chars in the needle are in the given string
    function isContained(str) {
        let arr = str.split('');
        for (let i = 0, len = needle.length; i < len; i++) {
            let place = arr.findIndex(val => {
                return val === needle[i]
            });
            if (place === -1) {
                return false;
            } else {
                arr.splice(place, 1);
            }
        }
        return true;
    }
}


// Approach 2

function MinWindowSubstring2(arr) {
    var str1 = arr[0],
        str2 = arr[1],
        min = Infinity,
        output;
    for (var i = 0; i < str1.length; i++) {
        for (var j = i + 1; j <= str1.length; j++) {
            var slice = str1.slice(i, j);
            if (slice.length < min && scramble(slice, str2)) {
                output = slice;
                min = slice.length;
            }
        }
    }
    return output;
}

function scramble(str1, str2) {
    function obj(str) {
        return str.split("").reduce(function(prev, curr) {
            prev[curr] ? prev[curr]++ : prev[curr] = 1;
            return prev;
        }, {});
    }
    var charCount1 = obj(str1),
        charCount2 = obj(str2);
    return Object.keys(charCount2).reduce(function(prev, curr) {
        return Math.min(prev, charCount1[curr] / charCount2[curr] || 0);
    }, Infinity) >= 1;
}