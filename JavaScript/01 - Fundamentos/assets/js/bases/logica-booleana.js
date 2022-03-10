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







// Pro tip: Asignación con operadores

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Yano soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Yano soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});
if ( regresaFalse() && regresaTrue && (true || false || true) ){
    console.log('Hacr algo');
} else {
    console.log('Hacer otra cosa');
}