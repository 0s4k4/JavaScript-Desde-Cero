///strings primitivos
const stringPrimitivo = 'soy un string primitivo';

console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = 'soy un string primitivo tambien';
console.log(typeof stringPrimitivoTambien)


//string objeto 

const stringObjeto = new String ('Soy un string objeto')
console.log(typeof stringObjeto)

//acceder a caracteres
const saludo = 'hola. como estas?';

//acceder a un letra por su indice
console.log(saludo[2])
console.log(saludo.charAt(2));

//conocer el indice de una letra
console.log(saludo.indexOf('o'))

//conocer donde inicia una palabra
console.log(saludo.indexOf('Como'));

//conocer si existe una palabra dentro de un texto en caso de que no existir devolvera un -1
console.log(saludo.indexOf('como'))

//conocer la ultima palabra posiocion de una letra
console.log(saludo.lastIndexOf('o'));

//extraer letras entre un determinado rango, ingresar el inidce inicial el final mas 1 
console.log(saludo.slice(3,5));

//conocer la longitud de un string

console.log(saludo.length);

//colocar todo tel texto en minuscula

console.log(saludo.toLocaleLowerCase)

//dividir un string, con el metodo split colocar la forma como se quiere dividir en medio de las comillas

const saludoDivido = saludo.split('')
console.log(saludoDivido)

//para acceder a las posiciones del texto divido

console.log(saludoDivido[1])

//si se quiere eliminar los espacios de mas
const saludoConEspacios = 'hola mundo';
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios);

//si se quiere remplazar alguno de los caracteres
const saludoOriginal = 'Hola mundo'
const nuevoSaludo = saludoOriginal.replace('mundo','B');
console.log(nuevoSaludo);