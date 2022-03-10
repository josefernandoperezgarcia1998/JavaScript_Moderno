const elMayor = ( a, b ) => ( a > b ) ? a : b;
console.log(elMayor(20,15));


const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';
console.log(tieneMembresia(true));



const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,15),
];

console.log(amigosArr);


const nota = 100;
const grado =  nota >= 95 ? 'A+':
                nota >= 90 ? 'A':
                nota >= 85 ? 'B+':
                nota >= 80 ? 'B':
                nota >= 75 ? 'C+':
                nota >= 70 ? 'C': 'F';

console.log({nota, grado});