import mongoose, {Schema} from 'mongoose'

const PedidoSchema = new Schema({
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
    categoria:{
        type: String,
        required: true,
        enum: ['Entradas', 'Combo', 'Hamburguesas', 'Papas', 'Sandwichs', 'Bebidas', 'Postre', 'Otros']
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    nombreUsuario: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
        unique: true
    },
    numeroPedido: {
        type: Number,
        required: true,
        min: 1,
        max: 2000,
        unique: true
    }

})

const Pedido = mongoose.model('pedido', PedidoSchema)
export default Pedido