import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  marcarPedidoRealizado,
  eliminarPedido,
} from "../controllers/pedidos.controllers.js";

const router = Router();

router.route("/nuevo").post(crearPedido);
router.route("/").get(listarPedidos);
router.route("/:id").put(marcarPedidoRealizado).delete(eliminarPedido)
export default router;
