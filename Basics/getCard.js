function pick(arr) {
    let idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}

function getCard() {
    const cards = [
        'A', '2', '3', '4',
        '5', '6', '7', '8',
        '9', '10', 'J', 'Q', 'K'
    ];
    const suites = [
        'hearts', 'diamonds', 'spades', 'clubs'
    ];
    return {
        value: pick(cards),
        suit: pick(suites)
    };
}

console.log(getCard());