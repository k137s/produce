import User from "../models/user.js"


// 注册登录控制
export default class AuthController {
    static async login(ctx) {
        let {
            username,
            password
        } = ctx.request.body;
        console.log(username, password);
        let user = await User.findOne({
            where: {
                username: username
            }
        });
        if (!user) {
            let message = "用户名不存在";
            ctx.body = message
        } else {

            console.log(user);
            ctx.response.status = 200;
            ctx.body = "ok";
        }
    }

    static async register(ctx) {
        ctx.body = "Register controller";
    }
}