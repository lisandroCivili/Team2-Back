import mongoose, {Schema} from 'mongoose'

const usuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        // validate:{
        //     validator: (dato)=>{
        //         const pattern = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        //         return pattern.test(dato)
        //     }
        // }
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    contraseña:{
        type: String,
        required: true,
    },
    rol:{
      type: String,
      required: true
    }

})
const Usuario = mongoose.model('usuario', usuarioSchema)
export default Usuario