import Router from "koa-router";

import Auth from "./controller/auth.js";
import User from "./controller/user.js";


const unprotectRouter = new Router({
    // prefix: "/un"
});
const protectRouter = new Router({
    // prefix: "/kay"  // 路由前缀
});

// auth 相关路由
unprotectRouter.post("/auth/login", Auth.login);
unprotectRouter.post("/auth/register", Auth.register);

// user 相关路由
protectRouter.get("/user", User.listUsers);
protectRouter.get("/user/:id", User.showUserDetail);
protectRouter.post("/user", User.addUser);
protectRouter.put("/user/:id", User.updateUser);
protectRouter.delete("/user/:id", User.deleteUser);
protectRouter.delete("/user", User.deleteUsers);


export {
    unprotectRouter,
    protectRouter
};