const personajes = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lon: -118.70
    },
    trajes: ['Mark I', 'Mark II', 'Hulkbuster'],
    direccion: {
        zip: '10800, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
    casado: true,
};

console.log(personajes)
console.log('Nombre', personajes.nombre);
console.log('Nombre', personajes['nombre']);
console.log('Edad', personajes.edad);
console.log('Coordenadas', personajes.coords);
console.log('Latitud', personajes.coords.lat);
console.log('No. Trajes', personajes.trajes.length);
console.log('Último traje', personajes.trajes[personajes.trajes.length - 1]);

const x = 'vivo';
console.log(personajes[x]);

console.log('Última película', personajes['ultima-pelicula'] );







// Más detalles de objeto literal


// Del objeto "personajes" se elimina la propiedad "edad" 
delete personajes.edad;
console.log(personajes);


// Se muestra el índice de cada propiedad del objeto (está por pares  <propiedad: valor>)
const entriesPares = Object.entries(personajes);
console.log(entriesPares);

// Evitar modificar las propiedades de los objetos
Object.freeze(personajes);

personajes.dinero = 1000000;
personajes.casado = false;
personajes.direccion.ubicacion = 'Costa rica';
console.log(personajes);

const propiedades = Object.getOwnPropertyNames(personajes);
const valores = Object.values(personajes);
console.log({propiedades,valores}); 