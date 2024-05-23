import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  marcarPedidoRealizado,
  eliminarPedido,
} from "../controllers/pedidos.controllers.js";
import validacionPedidos from "../helpers/validacionPedido.js";

const router = Router();

router.route("/nuevo").post([validacionPedidos],crearPedido);
router.route("/").get(listarPedidos);
router.route("/:id").put(marcarPedidoRealizado).delete(eliminarPedido)
export default router;
