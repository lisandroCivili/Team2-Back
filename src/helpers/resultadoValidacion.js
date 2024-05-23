import { validationResult } from "express-validator";

const validacionResultado = (res, req, next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: array()})
    }
    next()
}

export default validacionResultado