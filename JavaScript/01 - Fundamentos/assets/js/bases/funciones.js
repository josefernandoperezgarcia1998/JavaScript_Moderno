// Función normal
function saludar() {
    console.log('funcion normal');
}


// Función anónima
const saludar2 = function() {
    console.log('funcion anonima')
}


// Función normal con parámetro
function saludar3(nombre) {
    console.log('Funcion normal con parámetro ' + nombre);
}


// Función anónima con parámetro
const saludar4 = function(nombre) {
    console.log('funcion anonima con parámetro ' + nombre);
}


// Función normal con argumento y mostrando los argumentos de la misma
function saludar5(nombre){
    console.log(arguments);
    console.log('funcion normal viendo argumentos pasados desde el llamado de la función: '+ nombre);
}


// Función de flecha normal
const saludarFlecha = () => {
    console.log('Función de flecha');
}


// Función de flecha con parámetro
const saludarFlechaConParametro = (nombre) => {
    console.log('Función de flecha con parámetro/argumento: ' + nombre);
}


// Llamado de funciones
saludar();
saludar2();
saludar3('Fernando');
saludar4('Fernando');
saludar5('Fernando', true, 40);
saludarFlecha();
saludarFlechaConParametro('Fernando');






// Funciones con return





// Función normal con return
function saludar6(nombre) {
    console.log('Funcion con return 1: ' + nombre);
    return 1;
}
const retornaSaludoConReturn = saludar6('Fernando', true, 40, 'Costa Rica');
console.log({retornaSaludoConReturn});


// Función normal con parámetros y un return sumando los mismos
function sumar(a,b) {
    return a + b;
}
console.log( sumar(1,2) );


// Función normal de flecha con parámetros  y un return sumando los mismos
const sumarFlechaConParametro = (a,b) => { 
    return a + b;
}
console.log( sumar(1,2) );


// Functión de flecha simplificada con parámetros y sumando los mismos
const sumarFlechaconParametroReducido = (a,b) => a + b;
console.log( sumar(2,2) );


// Función normal retornando un numero aleatorio
function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());


// Función  de flecha reducida para que retorne un numero aleatorio
const getAleatorioFlech = () => Math.random();
console.log(getAleatorio());