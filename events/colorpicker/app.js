const colors = [
    'red', 'orange', 'blue', 'green', 'purple', 'indigo', 'violet'
];

const changeColor = function() {
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#container');
for (const color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}