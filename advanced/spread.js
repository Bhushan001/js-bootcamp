function giveMeFour(a, b, c, d) {
    console.log('a:', a);
    console.log('b:', b);
    console.log('c:', c);
    console.log('d:', d);
}
const nums = [1, 2, 3, 4];
const secondNums = [5, 6, 7, 8];
giveMeFour(nums);
giveMeFour(...nums);
giveMeFour(...
    'GOAT');
const thirdNums = [...nums, ...secondNums];
console.log(thirdNums);