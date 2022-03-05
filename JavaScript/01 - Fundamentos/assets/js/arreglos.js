// Arreglo 
// Son un objeto muy parecido a una lista de información que contiene un grupo de elementos.
// Usualmente, esa información dentro del arreglo es del mismo tipo de dato.

let videoJuegos = [ 'Mario', 'Megaman', 'Black Ops'];
console.log({videoJuegos});

console.log (videoJuegos[0]);


let arregloCosas = [
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    () => {},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light'],
];

// console.log({arregloCosas});

// Accediedo al arregloCosas en elíndice 7 y se accede al indice del otro arreglo en su posición 3
console.log(arregloCosas[7][3]);