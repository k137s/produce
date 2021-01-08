import Router from "koa-router";

import Workshop from "../controller/workshop.js";


const router = new Router();

// workshop 相关路由
router.get("/", Workshop.listWorkshops);
router.get("/:id", Workshop.showWorkshopDetail);
router.post("/", Workshop.addWorkshop);
router.put("/:id", Workshop.updateWorkshop);
router.delete("/:id", Workshop.deleteWorkshop);
router.delete("", Workshop.deleteWorkshops);


export default router;