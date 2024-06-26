import { check } from "express-validator";
import validacionResultado from "./validacionResultado.js";

const validacionUsuario = 
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
    .notEmpty()
        .withMessage('El email es obligatorio')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .withMessage('El mail debe tener formato: ejemplo@mail.com'),
    
    check('contraseña')
        .notEmpty()
        .withMessage('La contraseña es obligatoria'),

    check('rol')
        .notEmpty()
        .withMessage('El rol es obligatorio'),

    (req,res,next)=>validacionResultado(req,res,next)
]
export default validacionUsuario;