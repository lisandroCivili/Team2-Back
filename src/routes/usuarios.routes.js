import { Router } from "express";
import { crearUsuario, eliminarUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();
router.route('/').post(login)
router.route('/nuevo').post([validacionUsuario],crearUsuario)
router.route('/').get(listarUsuarios)
router.route('/:id').delete(eliminarUsuario)

export default router