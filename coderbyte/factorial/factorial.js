/* 
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, 
then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, 
the range will be between 1 and 18 and the input will always be an integer.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
// Approach 1
function factorial1(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        // code goes here  
        fact = fact * i;
    }
    return fact;
}

// Approach 2
function factorial2(num) {
    // code goes here  
    if (num < 0) return NaN;
    return (num > 1) ? factorial2(num - 1) * num : 1;

}