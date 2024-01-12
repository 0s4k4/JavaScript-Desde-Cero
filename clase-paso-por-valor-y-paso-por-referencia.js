///paso por valoe

let x = 1;
let y  = 'jorge';
let z = true;

let a = x;
let b = y;
let c = z;

a = 'a';
b = 'b';
c = 'c';

console.log(x,y,z,a,b,c)

//LO QUE PASA ES QUE TOMA EL ULTIMO VALOR QUE SE LE ASIGNA

//PASO POR REFERENCIA

let frutas = ['manzana'];
frutas.push('pepino');

console.log(frutas)


//se inserta por referencia, osea que no se crea otro valor en la memoria, sino que se mantiene

let panes = ['concha','cuernito'];

let panesBackup = panes;

console.log(panes,panesBackup)

//dentro de la memoria, este solo se le pasa por referencia los datos, al ser copia solo se la referencia para la mamoria y valores
