import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  marcarPedidoRealizado,
  eliminarPedido,
} from "../controllers/pedido.controllers.js";

const router = Router();

router.post("/pedidos/nuevo", crearPedido);

router.get("/pedidos", listarPedidos);

router.put("/pedidos/:id", marcarPedidoRealizado);

router.delete("/pedidos/:id", eliminarPedido);

export default router;
