import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();
router.route('/').post(login)
router.route('/nuevo').post([validacionUsuario],crearUsuario)
router.route('/listarUsuarios').get(listarUsuarios)

export default router