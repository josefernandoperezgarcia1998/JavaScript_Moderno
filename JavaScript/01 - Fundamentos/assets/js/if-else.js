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






// Laboratorio if-else >alternativa<


// Obtener el día se la semana por medio de objetos
const semanaObjeto = {
    domingo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7,
};

dia = 3;

const obtenerDia = Object.entries(semanaObjeto);
console.log( 'Dia de la semana con objeto: ', obtenerDia[dia] );


// Obtener el día de al semana por medio de arreglos
const semanaArreglo = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
// console.log(semanaArreglo);

console.log( 'Dia de la semana con arreglo: ', semanaArreglo[dia] );