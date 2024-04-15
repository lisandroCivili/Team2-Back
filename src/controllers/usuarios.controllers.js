import Usuario from "../database/model/usuario.js";
import bcrypt from "bcrypt"


export const crearUsuario = async (req, res)=>{
    try {
        const { email } = req.body
        let usuario = await Usuario.findOne({email:email})
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
            mensaje: "El usuario no pudo ser creado"
        })
    }   
}
export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const  usuarioBuscado = await Usuario.findOne({email});
        if(!usuarioBuscado){
            return res.status(400).json({
                mensaje:"Correo o password incorrecto"
            })
        }
        const  passwordValido = bcrypt.compareSync(password, usuarioBuscado.password)
        if(!passwordValido){
            return res.status(400).json({
                mensaje:"Correo o password incorrecto"
            })
        }
        res.status(200).json({mensaje:'El usuario existe', email: usuarioBuscado.email})
    }catch (error){
        console.error(error);
        res.status(500).json({
            mensaje: "Ocurrió un error durante el inicio de sesión",
        });
    }
}