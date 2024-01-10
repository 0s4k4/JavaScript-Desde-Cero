///datos primititivos - inmutables
//son aquelos datos que su estructura es primitiva y al volverla a declarar no se remplaza en el espacio de memoria
//sino que se crea otro espacio para ella, estos son sting,number,boolean,null, undefined,symbol,bignit

let nombre = 'jorge'
nombre = 'luis'
console.log(nombre);


///datos complejos
//son aquellas estructuras mas nuevas las cuales al momento de volverlas asignar, se cambiar directamente de la memoria sin crear otra

let frutas = ['manzana','pina'];
frutas[0] = 'limon';

console.log(frutas);


let usuario = {nombre:'elpepe',edad:14}
usuario.nombre = 'eteSech';
console.log(usuario)



function nuevoPokemon(objeto) {
    objeto.nombre = "nuevo pokemon";
}

let pokemon = {nombre: 'pikachu'}

nuevoPokemon(pokemon)

console.log(pokemon)