const myForEach = function(arr, method) {
    for (let i = 0; i < arr.length; i++) {
        method(arr[i]);
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
myForEach(nums, console.log)