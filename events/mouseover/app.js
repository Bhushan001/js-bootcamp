const btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener('mouseover', () => {
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});
btn.addEventListener('click', () => {
    btn.innerText = 'You Got Me!';
    document.body.style.backgroundColor = 'green';
});