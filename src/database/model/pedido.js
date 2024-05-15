import mongoose, {Schema} from 'mongoose'

const ProductoPedidoSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    nombreProducto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    detalle: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
});

const PedidoSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    productos: [ProductoPedidoSchema],
    precio:{
        type: Number,
        required: true,
        min: 1000
    },
    estado:{
        type: String,
        required: true
    }
})

const Pedido = mongoose.model('pedido', PedidoSchema)
export default Pedido