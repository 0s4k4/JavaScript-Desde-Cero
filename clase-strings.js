const primeraOpcion  = 'comillas simles';
const segundaOPcion  = "comillas dobles";
const terceraOPciion = `comillas invetidas`;

//concatenacion: +
const direccion = "calle falsa 123";
const ciudad = "sprinfield";
const direccion_completa = ciudad + direccion;

console.log("direccion sin espacios")
console.log("mi direccion completa es" + direccion_completa);

console.log("direccion con espacios");

const direccion_completa_espacios = ciudad + " " + direccion;
console.log("Mi direccion completa es "+ direccion_completa_espacios);


///segunda forma de concatenar:: template literals

const nombre = "Red"
const pais = "kanto"

const presentacion = `Hola, soy ${nombre} de ${pais}`

console.log(presentacion);



//tercera forma concatenacion join ()


const primeraparte = 'me encanta ';
const segundaParte  = 'los pokemones de';
const terceraParte = 'jotho';

const pensamiento = [primeraparte,segundaParte,terceraParte]
//indicamos que se separe por un espacio por cada elementos de join y se puede personalizar
console.log(pensamiento.join(' |'))


//4 concatenacion: concat()

const tipo1 = 'planta'
const tipo2 = 'agua'
const tipo3 = 'fuego'


const tiposPrincipales = "los tipos de los pokemons principales son ".concat(tipo1,',',tipo2,',',tipo3);
console.log(tiposPrincipales)