import { check } from "express-validator";
import resultadoValidaciones from "./resultadoValidaciones.js";

const validacionUsuarios = 
[
    check("nombreUsuario")
        .notEmpty()
        .withMessage("El nombre de usuario es obligatorio")
        .isLength({
            min:5, 
            max:30
        })
        .withMessage('El nombre de usuario debe tener entre 5 y 30 caracteres'),
  
    check('email')
        .withMessage('El email es obligatorio')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    
    check('contraseña')
        .notEmpty()
        .withMessage('La contraseña es obligatoria'),

    check('rol')
        .notEmpty()
        .withMessage('El rol es obligatorio'),

    (req,res,next)=>resultadoValidaciones(req,res,next)
]
export default validacionUsuarios;