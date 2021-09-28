const { describe } = require('yargs');

const argv= require('yargs')
            .options({
                'b':{
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                },
                's':{
                    alias: 'show',
                    default: false,
                    type:'boolean',
                    describe:'Muestra la tabla en caso de ser true'
                },
                'l':{
                    alias: 'limite',
                    default: 10,
                    type:'number',
                    describe:'Indica cual es el final de la tabla'
                }
            })
            .check((argv,options) => {
                //console.log("yargs",argv) va a mostar el objeto argv de yargs
                if(isNaN(argv.b)){
                    throw 'El parametro debe ser un numero'
                }
                if(isNaN(argv.l)){
                    throw 'El parametro debe ser un numero'
                }
                return true;
            })
            .argv;//Es importante que en caso de que se pongan mas cosas para un argumento el argv vaya al final


module.exports = argv;