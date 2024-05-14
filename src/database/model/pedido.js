import mongoose, {Schema} from 'mongoose'

const PedidoSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    productos: {
        required: true
    },
    precio:{
        type: Number,
        required: true,
        min: 1000
    },
    estado:{
        typeof: String,
        required: true
    }
})

const Pedido = mongoose.model('pedido', PedidoSchema)
export default Pedido