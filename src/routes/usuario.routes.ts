import express from 'express';
import {
	usuarioIndex,
	crearUsuarioView,
	crearUsuario,
	getUsuarioById,
	editarUsuario,
	borrarUsuario,
	listadousuarios,
	editarUsuarioView,
	recuperaUsuario,
	

} from '../controllers/usuario.controller';

const usuarioRoutes = express.Router(); //aca esta el usuarioroutes, que falla en el server

usuarioRoutes.get('/', usuarioIndex); 
usuarioRoutes.get ('/by/:idUsuario', getUsuarioById); //graba el primer registro que es el id aleatorio

//listado usuarios
usuarioRoutes.get('/listado',listadousuarios);

//crear usuario
usuarioRoutes.get('/crear', crearUsuarioView);
usuarioRoutes.post('/crear', crearUsuario);

//editar usuario
usuarioRoutes.get('/editar/:idUsuario',editarUsuarioView);//
usuarioRoutes.post('/editar/:idUsuario',editarUsuario);


usuarioRoutes.get('/borrar/:idUsuario',borrarUsuario);
usuarioRoutes.get('/restore/:id', recuperaUsuario);

export default usuarioRoutes;