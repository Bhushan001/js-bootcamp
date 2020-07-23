const getStats = (arr) => {
    const sum = arr.reduce((sum, grade) => sum + grade);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = sum / arr.length;

    return {
        sum,
        min,
        max,
        avg
    };
}
const grades = [34, 56, 76, 54, 98, 99, 78, 87];
const stats = getStats(grades);
console.log(stats);