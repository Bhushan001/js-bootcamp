const nums = [3, 5, 7, 9, 11];

const total = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

const grades = [34, 56, 76, 54, 98, 99, 78, 87];
// const maxGrade = grades.reduce((max, currentValue) => {
//     if (max < currentValue) {
//         return currentValue;
//     }
//     return max;
// });
const maxGrade = grades.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
});
console.log(maxGrade);
const minGrade = grades.reduce((min, currentValue) => {
    return Math.min(min, currentValue);
});
console.log(minGrade);

const books = [{
        title: 'A walk to remember',
        author: 'Bhushan',
        rating: 4.5,
        genre: [
            'fiction', 'sci-fi'
        ]
    },
    {
        title: 'Shantaram',
        author: 'Ganesh',
        rating: 3.5,
        genre: [
            'thriller', 'bio'
        ]
    },
    {
        title: 'Le Miaa Blue',
        author: 'Pavan',
        rating: 3,
        genre: [
            'romance', 'comedy'
        ]
    },
    {
        title: 'It is me!',
        author: 'Bhushan',
        rating: 4.5,
        genre: [
            'fiction', 'sci-fi'
        ]
    }
];

const groupRatings = books.reduce((ratingGroup, val) => {
    const bookRating = Math.floor(val.rating);
    if (!ratingGroup[bookRating]) ratingGroup[bookRating] = [];
    ratingGroup[bookRating].push(val);
    return ratingGroup;
}, {});
console.log(groupRatings);

const votes = ['Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'Y'];
const tally = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});
console.log(tally);