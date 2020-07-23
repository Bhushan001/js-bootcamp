makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();
            if (num > 0.5) resolve();
            else reject();
        }, 5000);
    });
}
const h1 = document.querySelector('h1');
makeDogPromise()
    .then(() => {
        h1.innerText = 'Congrats! You are getting a dog';
    }).catch(() => {
        h1.innerText = 'Sorry ! we could not get you a dog!';
    });