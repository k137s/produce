import Router from "koa-router";

import Role from "../controller/role.js";


const router = new Router();

// role 相关路由
router.get("/", Role.listRoles);
router.get("/:id", Role.showRoleDetail);
router.post("/", Role.addRole);
router.put("/:id", Role.updateRole);
router.delete("/:id", Role.deleteRole);
router.delete("", Role.deleteRoles);


export default router;