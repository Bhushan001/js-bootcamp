const nums = [112, 23, 34, 24, 15, 33, 56, 26, 223];
const badSort = nums.sort();
console.log('Ascending Sort:');
console.log(badSort);
/* 
We are using slice because we dont want to modify the original array,
slice() with no parameters copies the original array into new array.
 */
console.log('Ascending Sort:');
const ascSort = nums.slice().sort((a, b) => a - b);
console.log(ascSort);
console.log('Descending Sort:');
const descSort = nums.slice().sort((a, b) => b - a);
console.log(descSort);

// Array Of Objests
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
const ascRatingSort = books.slice().sort((a, b) => a.rating - b.rating);
const descRatingSort = books.slice().sort((a, b) => b.rating - a.rating);

console.log(ascRatingSort);
console.log(descRatingSort);