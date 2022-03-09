let a = 5;

if (a > 10) {
    console.log('A es mayor que diez');
} else {    
    console.log('A es menor que diez');
}

// console.log('Fin del programa');


const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

// If anidado
if ( dia === 0 ) {
    console.log('Es domingo');
} else {
    if ( dia === 1 ) {
        console.log('Lunes');
    } else {
        console.log('No es lunes ni domingo');
    }
}

// If-elseif
if ( dia === 0 ) {
    console.log('Es domingo');
} else if (dia === 1) {
    console.log('Es lunes');
} else if (dia === 2) {
    console.log('Es martes');
} else {
    console.log('No es lunes, martes ó domingo');
}