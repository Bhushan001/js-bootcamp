const str = "arrb6???4xxbl5???eee5";
const regex = /\?{3}/;
const nums = [];
let flag = false;

for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
        nums.push(i)
    }
}
for (let i = 0; i < nums.length - 1; i++) {
    if (parseInt(str[nums[i]], 10) + parseInt(str[nums[i + 1]], 10) === 10) {
        flag = true;
        let subStr = str.slice(nums[i], nums[i + 1]);
        console.log(subStr);
        subStr = subStr.replace(/[^\?]/g, '');
        console.log(subStr);
        if (subStr !== '???') {
            return false;
        }
    }
}
console.log(flag);