import mongoose, {Schema} from 'mongoose'

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        unique: true
    },
    email:{
        type: String,
        required: true,
        validate:{
            validator: (dato)=>{
                const pattern = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                return pattern.test(dato)
            }
        }
    },
    contraseña:{
        required: true,
        minLength: 8,
        maxLength: 16
    },
    rol:{
      type: String,
      required: true,  
    }

})
const Usuario = mongoose.model('usuario', usuarioSchema)
export default Usuario