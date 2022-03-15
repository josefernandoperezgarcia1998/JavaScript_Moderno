class Persona { 

    // Inicializando propiedades de la clase, no son variables
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre, codigo, frase) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}, bye.`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Frase: ${this.frase}`);
    }

}

// Se crean objetos haciendo instancia de la clase Padre
const spiderman = new Persona('Peter', 'Spider', 'No digas mmds Mari Jane');
const ironman = new Persona('Tony', 'iron', 'Millonario, modelo y actor');

// console.log(spiderman);
// console.log(ironman);

// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
ironman.miFrase();