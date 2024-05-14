import Pedido from "../database/model/pedido.js";

export const crearPedido = async (req, res) => {
    try {
        const { productos, total, email } = req.body;
        const nuevoPedido = new Pedido({ productos, total, email, estado: "pendiente" });
        await nuevoPedido.save();
        res.status(201).json({ mensaje: "Pedido creado correctamente", pedido: nuevoPedido });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al crear el pedido", error: error.message });
    }
};


export const listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.status(200).json({ pedidos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al listar los pedidos", error: error.message });
    }
};


export const marcarPedidoRealizado = async (req, res) => {
    try {
        const pedidoId = req.params.id;
        const pedido = await Pedido.findById(pedidoId);
        
        if (!pedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

      
        if (pedido.estado === 'realizado') {
            return res.status(400).json({ mensaje: "El pedido ya está marcado como realizado" });
        }

      
        pedido.estado = 'realizado';
        await pedido.save();

        res.status(200).json({ mensaje: "Estado del pedido modificado a 'realizado'", pedido });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al modificar el estado del pedido", error: error.message });
    }
};


export const eliminarPedido = async (req, res) => {
    try {
        const pedidoId = req.params.id;
        const pedido = await Pedido.findByIdAndDelete(pedidoId);
        
        if (!pedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

        res.status(200).json({ mensaje: "Pedido eliminado correctamente", pedido });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al eliminar el pedido", error: error.message });
    }
};



 