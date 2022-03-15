const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }   
}

function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }   
}

const maria = new Persona('María', 30);
const melissa = new Persona('Meli', 9);

maria.imprimir();
melissa.imprimir();