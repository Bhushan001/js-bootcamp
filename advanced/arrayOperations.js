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

const authors = books.map(book => book.author);
const authorsNoDups = Array.from(new Set(authors));
const goodBook = books.find(book => book.rating > 4);
const goodBooks = books.filter(book => book.rating > 4);
const fictionBooks = books.filter(book => book.genre.includes('fiction'));
console.log('=========== One Good Book ================');
console.log(goodBook);
console.log('=========== Authors(No Dupes) ================');
console.log(authorsNoDups);
console.log('=========== Good Books ================');
console.log(goodBooks);
console.log('=========== Fictional Book ================');
console.log(fictionBooks);