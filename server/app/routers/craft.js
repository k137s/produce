import Router from "koa-router";

import Craft from "../controller/craft.js";


const router = new Router();

// craft 相关路由
router.get("/", Craft.listCrafts);
router.get("/:id", Craft.showCraftDetail);
router.post("/", Craft.addCraft);
router.put("/:id", Craft.updateCraft);
router.delete("/:id", Craft.deleteCraft);
router.delete("", Craft.deleteCrafts);


export default router;