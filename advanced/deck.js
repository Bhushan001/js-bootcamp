const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        suites: ['hearts', 'diamonds', 'spades', 'clubs'],

        initializeDeck() {
            const { suites, values, deck } = this;
            for (let suit of suites) {
                for (let value of values.split(',')) {
                    deck.push({
                        suit,
                        value
                    });
                }
            }
        },
        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle(deck) {
            // loop over deck backwards
            for (let i = deck.length - 1; i > 0; i--) {
                // pick random index before the current element
                let j = Math.floor(Math.random() * (i + 1));
                // swap
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }
}
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle(myDeck.deck);
myDeck.drawMultiple(5);
console.log(myDeck);