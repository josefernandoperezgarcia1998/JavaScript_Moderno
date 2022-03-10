const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// Negación, Operador booleano
console.warn('Not ó Negación');
console.log(true); // Devuelve true
console.log(!true); // Devuelve false
console.log(!false); // Devuelve true

console.log( !regresaFalse() );


// And, Operador booleano
console.warn('And');
console.log(true && true) // true
console.log(true && false) // false

console.log('===============');
console.log( regresaFalse() && regresaTrue());
console.log( regresaTrue() && regresaFalse());

console.log('====== && =====');
regresaFalse() && regresaTrue();

console.log('4 condiciones &&: ', true && true && true && false); // false ó 0

// OR
console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones ||: ', true || true || true || false); //true ó 1