import Producto from "../database/model/producto.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "Producto creado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al crear el producto",
    });
  }
};
export const obtenerProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({
        mensaje: "El ID enviado no corresponde a ningún producto",
      });
    }
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({
        mensaje: "El ID enviado no corresponde a ningún producto",
      });
    }
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El producto fue editado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al editar el producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({
        mensaje: "El ID enviado no corresponde a ningún producto",
      });
    }
    await Producto.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ mensaje: "El producto fue eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al eliminar el producto",
    });
  }
};
