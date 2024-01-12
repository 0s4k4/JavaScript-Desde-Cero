// Tipo de dato complejo - Paso por referencia

let pokemones ={
    mounstro1:'squirle'
}

let digimones  = pokemones

digimones.mounstro1 = 'metalgreymon'

console.log(pokemones)

///lo que pasa es lo siguiente, al ser un tipo de dato por referencia, al modificar la estructura se modifcia la memoria y asignacion, en este entonces actua el basurero de javascript para dejar el asigfnamiento o por por referencia
//donde se tenia el elemento viejo y se deja el mas nuevo

let inventario = {
    arma: 'espada maestra'
}

inventario.escudo = "escudo hylyano"

console.log(inventario)

//similar este caso, crea un acceso directo de cambios, asi el que hagas el cambio mas reciente es el que sera referenciado primero en el archivo original