import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  eliminarPedido,
} from "../controllers/pedidos.controllers.js";
import validacionPedidos from "../helpers/validacionPedido.js";

const router = Router();

router.route("/nuevo").post([validacionPedidos],crearPedido);
router.route("/").get(listarPedidos);
router.route("/:id").delete(eliminarPedido);
export default router;
