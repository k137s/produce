import Router from "koa-router";

import {
    unprotectRouter,
    protectRouter
} from "./routers/user.js";
import craft from "./routers/craft.js";
import customer from "./routers/customer.js";


const router = new Router();

// 调用 router 对象的 routes 方法获取到对应的 Koa 中间件
// 调用 allowedMethods 方法注册了 HTTP 方法检测的中间件，当用户通过不正确的 HTTP 方法访问 API 时，就会自动返回 405 Method Not Allowed 状态码
// 未保护的路由
router.use("/auth", unprotectRouter.routes(), unprotectRouter.allowedMethods);
// 受保护的路由
router.use("/user", protectRouter.routes(), protectRouter.allowedMethods);

router.use("/craft", craft.routes(), craft.allowedMethods());
router.use("/customer", customer.routes(), customer.allowedMethods());


export default router;