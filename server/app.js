import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import logger from "./app/middleware/logger.js";
import router from "./app/router.js";


// 创建 app 对象
const app = new Koa();
const port = 3000;


// 注册中间件
app.use(logger());
app.use(cors());
app.use(bodyParser());

// 响应用户请求
// app.use((ctx) => {
//     console.log(ctx.href);
//     ctx.body = "Hello world.";
// });

// 挂载路由
app.use(router.routes()).use(router.allowedMethods());

// 运行服务器
app.listen(port, () => console.log("http://127.0.0.0:3000"));