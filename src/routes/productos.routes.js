import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import validacionProductos from "../../public/helpers/validacionProductos.js";

const router = Router();
router.route("/productos").get(listarProductos).post([validacionProductos],crearProducto);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put([validacionProductos],editarProducto)
  .delete(borrarProducto);

export default router;
