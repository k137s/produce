import Router from "koa-router";

import ProductLine from "../controller/product_line.js";


const router = new Router();

// product_line 相关路由
router.get("/", ProductLine.listProductLines);
router.get("/:id", ProductLine.showProductLineDetail);
router.post("/", ProductLine.addProductLine);
router.put("/:id", ProductLine.updateProductLine);
router.delete("/:id", ProductLine.deleteProductLine);
router.delete("", ProductLine.deleteProductLines);


export default router;