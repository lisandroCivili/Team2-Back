import { check } from "express-validator";
import validacionResultado from "./validacionResultado.js";

const validacionPedidos = 
[
    check('email')
        .notEmpty()
        .withMessage('El email es obligatorio')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .withMessage('El mail debe tener formato: ejemplo@mail.com'),
    
    check('precioTotal')
        .notEmpty()
        .withMessage('El precio total es obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom((value)=>{
            if (value>= 1000) {
                return true
            }else{
                throw new Error ('El precio total minimo es de $1000')
            }
        }),

    check('estado')
        .notEmpty()
        .withMessage('El estado es obligatorio'),

    (req,res,next)=>validacionResultado(req,res,next)
]
export default validacionPedidos;