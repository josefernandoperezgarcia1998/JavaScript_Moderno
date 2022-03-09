function saludar() {
    console.log('funcion normal');
}


const saludar2 = function() {
    console.log('funcion anonima')
}

function saludar3(nombre) {
    console.log('Funcion normal con parámetro ' + nombre);
}

const saludar4 = function(nombre) {
    console.log('funcion anonima con parámetro ' + nombre);
}

function saludar5(nombre){
    console.log(arguments);
    console.log('funcion normal viendo argumentos pasasdos desde el llamado de la función: '+ nombre);
}



const saludarFlecha = () => {
    console.log('Función de flecha');
}


const saludarFlechaConParametro = (nombre) => {
    console.log('Función de flecha con parámetro/argumento: ' + nombre);
}

saludar();
saludar2();
saludar3('Fernando');
saludar4('Fernando');
saludar5('Fernando', true, 40);
saludarFlecha();
saludarFlechaConParametro('Fernando');