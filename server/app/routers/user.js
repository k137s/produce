import Router from "koa-router";

import Auth from "../controller/auth.js";
import User from "../controller/user.js";


const unprotectRouter = new Router({
    // prefix: "/auth"
});
const protectRouter = new Router({
    // prefix: "/user" // 路由前缀
});

// auth 相关路由
unprotectRouter.post("/login", Auth.login);
unprotectRouter.post("/register", Auth.register);

// user 相关路由
protectRouter.get("/", User.listUsers);
// protectRouter.get("/:name", User.name);
protectRouter.get("/:id", User.showUserDetail);
protectRouter.post("/", User.addUser);
protectRouter.put("/:id", User.updateUser);
protectRouter.delete("/:id", User.deleteUser);
protectRouter.delete("/", User.deleteUsers);


export {
    unprotectRouter,
    protectRouter
};