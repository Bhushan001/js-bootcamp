const sum = function() {
    const argsArr = [...arguments];
    return argsArr.reduce((acc, currentVal) => {
        return acc + currentVal;
    });
}
console.log(sum(1, 2, 3, 4, 5));