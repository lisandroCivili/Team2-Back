import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";
import validacionUsuarios from "../../public/helpers/validacionUsuarios.js";

const router = Router();
router.route('/').post(login)
router.route('/nuevo').post([validacionUsuarios],crearUsuario)
router.route('/').get(listarUsuarios)

export default router