import mongoose, {Schema} from 'mongoose'

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
        unique: true
    },
    precio:{
        type: Number,
        required: true,
        min: 1000,
        max: 7000
    },
    imagen:{
        type: String,
        required: true,
        validate:{
            validator: (dato)=>{
                const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/
                return pattern.test(dato)
            }
        }
    },
    categoria:{
        type: String,
        required: true,
        enum: ['Entradas', 'Combo', 'Hamburguesas', 'Papas', 'Sandwichs', 'Bebidas', 'Postre', 'Otros']
    },
    detalle:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 3000
    }
})

const Producto = mongoose.model('producto', productoSchema)
export default Producto