const multiplyBy = function(num) {
    return function(arg) {
        return num * arg;
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadraple = multiplyBy(4);

console.log(double(6));
console.log(triple(3));
console.log(quadraple(4));

console.log('=============IsChild============');

const isBetween = function(minAge, maxAge) {
    return function(age) {
        return age >= minAge && age <= maxAge;
    }

}
const isChild = isBetween(0, 18);
const isMilennial = isBetween(1990, 1999);
console.log(isChild(7));
console.log(isChild(21));
console.log(isMilennial(1993));