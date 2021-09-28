


//Imprimir la tabla del 5 en por consola
const { option, boolean } = require('yargs');
const{crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//console.clear();

/*
--------------------Forma Rudimentaria no recomendable porque es por posicion ------------------------------
const [,,arg3 = "base=5"] = process.argv; //trae los argumentos que se pasan por linea de comandos y los mete en un array
console.log(arg3);
const [,base = 5]= arg3.split("=");//separa el string a partir del caracter =
console.log(base);
*/

console.log(argv);

const base= argv.base;
const listar=argv.s;
const limite=argv.l;

crearArchivo(base,listar,limite)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));


