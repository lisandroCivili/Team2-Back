import { check } from "express-validator";
import resultadoValidaciones from "./resultadoValidaciones.js";

const validacionPedidos = 
[
    check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre de producto es obligatorio")
        .isLength({
            min:5, 
            max:30
        })
        .withMessage('El nombre de producto debe tener entre 5 y 30 caracteres'),
    
    check('precio')
        .withMessage('El precio es obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom((value)=>{
            if (value>= 1000 && value <=7000) {
                return true
            }else{
                throw new Error ('El precio debe ser entre 1000 y 7000')
            }
        }),

    check('categoria')
        .notEmpty()
        .withMessage('La categoria es obligatoria'),
        
    check('email')
        .withMessage('El email es obligatorio')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),

    check("nombreUsuario")
        .notEmpty()
        .withMessage("El nombre de usuario es obligatorio")
        .isLength({
            min:5, 
            max:30
        })
        .withMessage('El nombre de usuario debe tener entre 5 y 30 caracteres'),
  
    check('cantidad')
        .notEmpty()
        .withMessage('La cantidad es obligatoria')
        .isNumeric()
        .withMessage('La cantidad debe ser un numero')
        .custom((value)=>{
            if (value>= 1 && value <=5) {
                return true
            }else{
                throw new Error ('La cantidad debe ser entre 1 y 5')
            }
        }),

    check('numeroPedido')
        .notEmpty()
        .withMessage('El numero de pedido es obligatorio')
        .isNumeric()
        .withMessage('El numero de pedido debe ser un numero')
        .custom((value)=>{
            if (value>= 1 && value <=2000) {
                return true
            }else{
                throw new Error ('El numero de pedido debe ser entre 1 y 2000')
            }
        }),

    (req,res,next)=>resultadoValidaciones(req,res,next)
]
export default validacionPedidos;