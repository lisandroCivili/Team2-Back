import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";

const router = Router();
router.route('/').post(login)
router.route('/nuevo').post(crearUsuario)
router.route('/').get(listarUsuarios)

export default router