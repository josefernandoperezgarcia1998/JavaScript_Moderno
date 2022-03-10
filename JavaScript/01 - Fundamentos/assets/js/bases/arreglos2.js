// Longitud del arreglo
let juegos = ['Zelda',  'Mario', 'Metroid', 'Chrono Trigger'];
console.log('El largo del arreglo es: ', juegos.length);


// Obteniendo el primer y último elemento del arreglo
let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});


// Mostrando el elemento, indice y el tipo de dato que es
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});


// Agregando al arreglo en la última posición un nuevo juego
let nuevaLongitud = juegos.push('CoD');
console.log('entré',{ nuevaLongitud, juegos});


// Agregando al arreglo en la primera posición del arreglo
nuevaLongitud = juegos.unshift('Omnilife');
console.log({nuevaLongitud, juegos});


// Borrando el último elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


// Borrando un elemento en una posición en específico
// Se crea una variable con valor uno
// Se muestra el arreglo original
// Se crea una variable que va a almacenar un nuevo arreglo 
// Que retorna cuantos elements quiero borrar(2) desde que posición (pos)
// Mostrando el arreglo eliminado y el original
let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos,  2);
console.log({juegosBorrados, juegos});

// Conociendo el índice de un elemento en el arreglo
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});