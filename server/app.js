import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import {
    unprotectRouter,
    protectRouter
} from "./app/router.js";

import logger from "./app/middleware/logger.js";


// 创建 app 对象
const app = new Koa();
const port = 3000;


// 注册中间件
app.use(logger());
app.use(cors());
app.use(bodyParser());

// 响应用户请求
// app.use((ctx) => {
//     ctx.body = "Hello world.";
// });

// 调用 router 对象的 routes 方法获取到对应的 Koa 中间件
// 调用 allowedMethods 方法注册了 HTTP 方法检测的中间件，当用户通过不正确的 HTTP 方法访问 API 时，就会自动返回 405 Method Not Allowed 状态码
// 未保护的路由
app.use(unprotectRouter.routes()).use(unprotectRouter.allowedMethods());
// 受保护的路由
app.use(protectRouter.routes()).use(protectRouter.allowedMethods());

// 运行服务器
app.listen(port, () => console.log("http://127.0.0.0:3000"));