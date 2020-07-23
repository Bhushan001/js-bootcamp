let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
nums.splice(2, 0, 12, 13);
console.log(nums);
nums.splice(2, 2);
console.log(nums);
nums.splice(nums.length, 0, 11);
console.log(nums);

let animals = ['cat', 'dog', 'rat', 'mouse', 'cow', 'bull', 'deer', 'tiger'];
console.log(animals);
animals.splice(0, 2, animals[0].toUpperCase(), animals[1].toUpperCase());
console.log(animals);