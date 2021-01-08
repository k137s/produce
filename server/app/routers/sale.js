import Router from "koa-router";

import Sale from "../controller/sale.js";


const router = new Router();

// sale 相关路由
router.get("/", Sale.listSales);
router.get("/:id", Sale.showSaleDetail);
router.post("/", Sale.addSale);
router.put("/:id", Sale.updateSale);
router.delete("/:id", Sale.deleteSale);
router.delete("", Sale.deleteSales);


export default router;