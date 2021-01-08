import Router from "koa-router";

import Tag from "../controller/tag.js";


const router = new Router();

// tag 相关路由
router.get("/", Tag.listTags);
router.get("/:id", Tag.showTagDetail);
router.post("/", Tag.addTag);
router.put("/:id", Tag.updateTag);
router.delete("/:id", Tag.deleteTag);
router.delete("", Tag.deleteTags);


export default router;