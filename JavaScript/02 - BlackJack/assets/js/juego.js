/* 

2C - Dos de clubs
2D - Dos de diamonds
2H - Dos de Hearts
2S - Dos de spades

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


const crearDeck = () => {
    for(let i = 2; i <= 10; i++ ) {
        for(let tipo of tipos) {
            deck.push( i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck();