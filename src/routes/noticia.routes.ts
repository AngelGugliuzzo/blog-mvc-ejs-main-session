import express from 'express';
import {
	noticiasIndex,
	crearNoticiaView,
	crearNoticia,
	getNoticiaById,
	editarNoticiaView,
	editarNoticia,
	listadoNoticias,
	borrarNoticia,
	recuperaNoticia,
	
} from '../controllers/noticia.controller';

const noticiasRoutes = express.Router();

noticiasRoutes.get('/', noticiasIndex);
noticiasRoutes.get ('/by/:idNoticia', getNoticiaById);  //me saca la pantalla de crear, pone el id como primer campo

//listado noticias
noticiasRoutes.get('/listado',listadoNoticias);

//crearnoticia
noticiasRoutes.get('/crear', crearNoticiaView);
noticiasRoutes.post('/crear', crearNoticia);

//editar noticia
noticiasRoutes.get('/editar/:idNoticia',editarNoticiaView);//
noticiasRoutes.post('/editar/:idNoticia',editarNoticia);

//delete noticia
noticiasRoutes.get('/borrar/:idNoticia',borrarNoticia);

//recuperar noticia
noticiasRoutes.get('/restore/:idNoticia', recuperaNoticia);

export default noticiasRoutes;
