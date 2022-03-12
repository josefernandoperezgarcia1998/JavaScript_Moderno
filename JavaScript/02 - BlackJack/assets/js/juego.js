/* 

2C - Dos de clubs
2D - Dos de diamonds
2H - Dos de Hearts
2S - Dos de spades

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;


//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


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

    return cartaObtenida;
}

//Arrow function para saber el valor de la carta en valor number
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

// Turno de la computadora

const turnoComputadora = ( puntosMinimos ) => {
    
    do {
        const carta = pedirCarta();
        
        // Agregando el valor de la carta a puntosComputadora (jugador 2)
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
        
        // Creando las cartas en el html
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if ( puntosMinimos > 21 ){
            break;
        }
        
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
}

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    
    // Agregando el valor de la carta a puntosJugeador (jugador 1)
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    
    // Creando las cartas en el html
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    // Evaluando el estado de los puntos del jugador 1
    if ( puntosJugador > 21 ) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if ( puntosJugador === 21 ) {
        console.warn('21');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', () => {
    
    btnPedir.disabled = true;
    btnNuevo.disabled = true;

    turnoComputadora( puntosJugador );
});