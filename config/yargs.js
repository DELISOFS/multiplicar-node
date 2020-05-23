const opciones = {
	base: {
		demand:true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}

}

const argv = require('yargs')
				.command('listar','Imprimir en consola la tabla de multiplicar',opciones)
				.command('crear','Genera un archivo con la tabla de multiplicar',opciones)
				.help()
				.argv;   //PAQUETE DE LOS MODULO DE NODE

module.exports = {
	argv
}