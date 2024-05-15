import mongoose, {Schema} from 'mongoose'

const ProductoPedidoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30
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
    },
    cantidad:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

const PedidoSchema = new Schema({
    email:{
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    productos: [ProductoPedidoSchema],
    precioTotal:{
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