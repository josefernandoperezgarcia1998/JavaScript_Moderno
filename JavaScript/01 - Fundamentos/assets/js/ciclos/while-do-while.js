const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;


// Mostrando todos los elementos del arreglo

console.warn('While');
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}



// JS determina falso a los siguientes valores
// null, undefined y false



// while (carros[i]) {
//     console.log(carros[i]);
//     i++;
// }



// while (carros[i]) {
    
//     if ( i === 1){
//         // break;
//         i++;
//         continue;
//     }
//     console.log(carros[i]);
//     i++;
// }

console.warn('Do-while');

let j = 0;

do {
    console.log( carros[j] );
    j++;
} while ( carros[j] );