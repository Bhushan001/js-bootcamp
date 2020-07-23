const random = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== random) {
    console.log(`Target:${random} - Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target:${random} - Guess: ${guess}`);
console.log('Congrats! You Win.');