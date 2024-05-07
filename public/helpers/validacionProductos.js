import { check } from "express-validator";
import resultadoValidaciones from "./resultadoValidaciones.js";

const validacionProductos = 
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

  check('imagen')
    .notEmpty()
    .withMessage('La imagen es obligatoria')
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/),
  
  check('categoria')
    .notEmpty()
    .withMessage('La categoria es obligatoria'),
    
  check('detalle')
    .notEmpty()
    .withMessage('El detalle de producto es obligatoria')
    .isLength({
      min: 15,
      max: 3000
    })
    .withMessage('El detalle de producto debe tener entre 15 y 3000 caracteres'), 
    
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

  (req,res,next)=>resultadoValidaciones(req,res,next)
]
export default validacionProductos;