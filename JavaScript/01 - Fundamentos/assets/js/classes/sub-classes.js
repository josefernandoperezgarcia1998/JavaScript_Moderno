class Persona { 

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre );
        console.log( 'Hola a todos, soy un método estático ');
    }

    // Inicializando propiedades de la clase, no son variables
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida fav de ${this.nombre} es: ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}, bye.`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Frase: ${this.frase}`);
    }

}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Los avengeers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Peter', 'Spider', 'No digas mmds Mari Jane');
console.log(spiderman);
spiderman.quienSoy();