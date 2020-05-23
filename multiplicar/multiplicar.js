// RIQUIRE
const fs = require('fs');    //PAQUETE FILESYSTEM PARA GRABAR ARCHIVOS
const colores  = require('colors');  //PAQUETE PARA COLOCAR COLORES

let listarTabla = (base, limite = 10) => {

	console.log('======================'.green);
	console.log(`======Tabla de ${ base}======`.green);
	console.log('======================'.green);

	for (i = 0; i <= limite; i++){
		let listar = base*i;
		console.log (`${ base} * ${ i} = ${ listar}`);
	}
}

crearArchivo = (base, limite = 10) => {

	return new Promise ((resolve, reject) => {

		if (!Number(base) || !Number(limite)) {
			reject(`La base "${ base}" o el Limite "${ limite}", que introdujo  no es un número`);
			return;
		}

		let data = '';

		for ( let i = 1; i <= limite; i ++) {
			let Tabla = i * base;
			data+= `${ i} * ${ base} = ${ Tabla}\n`;
		}

		fs.writeFile(`tablas/tabla-${ base}.txt`, data, (err) => {
			if (err) 
				reject (err)
			else 
				resolve (`tabla-${ base}.txt`);		//este es el nombre archivo que devuelve con la funcion resolve	
		});

	}) 

}

module.exports = {
	crearArchivo,
	listarTabla
}
