/* 
* Ejercicio descripción:
* Días de semana abrimos a las 11
* pero los fines de semana abrimos a las 9

//Entra a un sitio web, para consultar si está abierto...
*/

const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

// Forma 1
    // if ( dia === 0 || dia === 6 ) {
    //     console.log('Fin de semana');
    //     horaApertura = 9;
    // } else {
    //     console.log('Dia de semana');
    //     horaApertura = 11;
    // }

// Forma 2
    // if ( [0,6].includes( dia ) ) {
    //     console.log('Fin de semana');
    //     horaApertura = 9;
    // } else {
    //     console.log('Dia de semana');
    //     horaApertura = 11;
    // }

// Forma 3
horaApertura = ( [0,6].includes( dia) ) ? 9 : 11;


// Forma 1
    // if (horaActual >= horaApertura ) {
    //     mensaje = 'Está abierto';
    // } else {
    //     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
    // }

// Forma 2
mensaje = ( horaActual>=horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;


console.log({horaApertura, mensaje});