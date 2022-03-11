/* 

2C - Dos de clubs
2D - Dos de diamonds
2H - Dos de Hearts
2S - Dos de spades

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


// Esta función crea una nueva baraja de forma random
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

    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
    
    if( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    let cartaObtenida = deck.pop();

    console.log(deck);
    console.log(cartaObtenida);

    return cartaObtenida;
}

// pedirCarta(); 

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    //let puntos = 0;

    return isNaN(valor) ?
            (( valor === 'A' ) ? 11 : 10) 
            : puntos = valor * 1;

    // if ( isNaN(valor) ) {
    //     puntos = ( valor === 'A' ) ? 11 : 10;
    // } else {
    //     puntos = valor * 1;
    // }
    // console.log(puntos);
}

const valor = valorCarta(pedirCarta());
console.log({valor});

valorCarta('AD');