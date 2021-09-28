const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, limite = 10) => {
    let salida ="";
    let consola = "";

    for(let i=1;i<=limite;i++){
        salida+=`${base} X ${i} = ${base*i} \n`;
        consola+=`${base} ${"X".yellow} ${i} ${"=".red} ${base*i} \n`;
    }

    if(listar){
        console.log("==================".rainbow);
        console.log("Tabla del:".cyan.underline, base);
        console.log("==================".rainbow);
        console.log(consola);
    }
    
    /*fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        if(err) throw err;
        console.log(`tabla-${base}.txt creada`);
    })*/
    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);//se le indica que se cree en la carpera salida del proyecto
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    //crearArchivo: crearArchivo //esto es redundante directamente se puede poner uno solo
    crearArchivo
}
