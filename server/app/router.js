import Router from "koa-router";

import Auth from "./controller/auth.js";
import User from "./controller/user.js";


const unprotectRouter = Router();
const protectRouter = Router();

// auth 相关路由
unprotectRouter.post("/auth/login", Auth.login);
unprotectRouter.post("/auth/register", Auth.register);

// user 相关路由
protectRouter.get("/user", User.listUsers);
protectRouter.get("/user/:id", User.showUserDetail);
protectRouter.put("/user/:id", User.updateUser);
protectRouter.delete("/user/:id", User.deleteUser);


export {
    unprotectRouter,
    protectRouter
};