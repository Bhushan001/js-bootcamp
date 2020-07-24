let data = "2018-3-9";

let reg = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/,
    arr = reg.exec(data),
    year,
    month,
    day;

if (reg.test(data)) {
    year = arr[1];
    month = arr[2];
    day = arr[3];
} else {
    console.log("Wrong format");
}


// grouping the [-./] will allow use to match delimeter in date i.e only  xxxx-xx-xx or xxxx/xx/xx or xxxx.xx.xx will match now
let reg2 = /^(\d\d\d\d)([-./])(\d{1,2})\2(\d{1,2})$/;
console.log(reg2.test(data));