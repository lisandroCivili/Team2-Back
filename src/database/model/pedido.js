import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
  total: {
    type: Number,
    required: true
  },
  cliente: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'realizado'],
    default: 'pendiente'
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;

