let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 12, 45, 23, 45, 22, 24];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
let sorted = nums.sort(function(a, b) { return b - a });
console.log(sorted);
console.log(sum);