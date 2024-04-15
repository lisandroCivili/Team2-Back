import { Router } from "express";
import { crearUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();
router.route('/nuevoUsuario').post(crearUsuario)

export default router