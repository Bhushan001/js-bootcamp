/*
Bracket Matcher

Have the function BracketMatcher(str) take the str parameter being passed 
and return 1 if the brackets are correctly matched and each one is accounted for. 
Otherwise return 0. For example: if str is "(hello (world))", 
then the output should be 1, but if str is "((hello (world))" 
then the output should be 0 because the brackets do not correctly match up. 
Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function bracketMatcher(str) {
    var strArray = str.split('');
    var counter = 0;
    for (var i = 0, len = strArray.length; i < len; i++) {
        if (strArray[i] === "(") {
            counter++;
        } else if (strArray[i] === ")") {
            counter--;
        }
        if (counter < 0) {
            return 0;
        }
    }
    if (counter === 0) {
        return 1;
    }
    return 0;
}

// Approach 2
function bracketMatcher2(str) {
    let stack = [];
    let negatives = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push('(');
        } else if (str[i] === ')') {
            if (stack.pop() === undefined) {
                negatives++;
            }
        }
    }
    return (stack.length === 0 && negatives === 0) ? 1 : 0;
}

// Approach 3
function bracketMatcher3(str) {
    var lP = 0;
    var rP = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') lP++;
        if (str[i] === ')') rP++;
        if (rP > lP) return 0;
    }
    if (rP === lP) return 1;
    return 0;
}