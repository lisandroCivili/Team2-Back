import Usuario from "../database/model/usuario.js";

export const crearUsuario = async (req, res)=>{
    try {
        const { email } = req.body
        let usuario = await Usuario.findOne({email})
        if (usuario) {
            return res.status(400).json({
                mensaje:"Ese usuario ya esta registrado"
            })
        }
        usuario = new Usuario(req.body);
        await usuario.save();

        res.status(201).json({
            mensaje: "Usuario creado.",
            email: usuario.email
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "EL usuario no pudo ser creado."
        })
    }   
}