let str = "Programming courses always start with hello world examples!";

let regex = /world/;
console.log(regex.test(str));
console.log(regex.exec(str));
console.log(str.replace(regex, "earth"));
console.log(str.split(regex));