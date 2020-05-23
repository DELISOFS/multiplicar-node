const argv = require('./config/yargs').argv;   //LLAMAMOS A LA FUNCION ARGV DENTRO DEL ARCHIVO YARGS
const colors  = require('colors/safe');  //LLAMAMOS AL PAQUETE DE COLORES

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //LLAMAR ARCHIVO CREADO POR NOSOTROS


let comando = argv._[0];  //El guion bajo _ hace referencia al arreglo que inicia en la posicion cero "0"

switch (comando) {
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
 			.then(archivo => console.log(`Archivo Creado: `.blue, colors.green(archivo)))
 			.catch(e => console.log(e));
		break;
	default:
		console.log('Comando no reconocido');
		break;
}