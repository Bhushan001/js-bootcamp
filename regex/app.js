/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-801-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66-5", "801-009-090-", "801-222-8083", "801-777-66-5"];

let regEx = /^801-\d\d\d\-\d\d\d\d/
newArray = [];
// let newArray = phoneNums.filter(elem => regEx.test(elem));

// for (let i = 0; i < phoneNums.length; i++) {
//     if (regEx.test(phoneNums[i])) {
//         newArray.push(phoneNums[i]);
//     }
// }

let arr = phoneNums.reduce((acc, val) => {
    if (regEx.test(val)) {
        acc.push(val);
    }
    return acc;
}, []);
console.log(arr);