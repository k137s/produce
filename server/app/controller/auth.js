import {
    User
} from "../models/index.js";
import {
    UserService
} from "../service/index.js";
import Controller from "./controller.js";


// 注册登录控制
export default class AuthController {
    static async login(ctx) {
        const {
            username,
            password
        } = ctx.request.body;
        console.log(username, password);
        const user = await UserService.getUserByName(User, username);
        if (!user) {
            const message = "用户名不存在";
            ctx.body = message
        } else {
            ctx.status = 301;
            ctx.redirect(`/user/${user.id}`);
        }
    }

    static async register(ctx) {
        ctx.body = "Register controller";
    }
}