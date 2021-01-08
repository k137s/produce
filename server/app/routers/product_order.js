import Router from "koa-router";

import ProductOrder from "../controller/product_order.js";


const router = new Router();

// product_order 相关路由
router.get("/", ProductOrder.listProductOrders);
router.get("/:id", ProductOrder.showProductOrderDetail);
router.post("/", ProductOrder.addProductOrder);
router.put("/:id", ProductOrder.updateProductOrder);
router.delete("/:id", ProductOrder.deleteProductOrder);
router.delete("", ProductOrder.deleteProductOrders);


export default router;