const sum = (...nums) => nums.reduce((acc, currentVal) => acc + currentVal);
console.log(sum(1, 2, 3, 4, 5));