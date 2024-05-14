import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  marcarPedidoRealizado,
  eliminarPedido,
} from "../controllers/pedidos.controllers.js";

const router = Router();

router.route("/pedidos/nuevo").post(crearPedido);

router.route("/pedidos").get(listarPedidos);

router.route("/pedidos/:id").put(marcarPedidoRealizado).delete(eliminarPedido)
export default router;
