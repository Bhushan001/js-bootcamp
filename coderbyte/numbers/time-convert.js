/*
Have the function TimeConvert(num) take the num parameter being passed 
and return the number of hours and minutes the parameter converts to 
(ie. if num = 63 then the output should be 1:3).
 Separate the number of hours and minutes with a colon.
Use the Parameter Testing feature in the box below to test your code with different arguments. 
*/
function timeConvert(num) {
    const division = Math.floor(num / 60);
    const remainder = num % 60;
    // code goes here  
    return `${division}:${remainder}`;
}

function timeConvert2(num) {
    // code goes here  
    return Math.floor(num / 60) + ':' + (num % 60);
}