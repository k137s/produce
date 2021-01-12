import {
    User
} from "../models/index.js"
import {
    userService
} from "../service/index.js"
import Controller from "./controller.js";


// 用户操作控制
export default class UserController {
    // 获取用户列表
    static async listUsers(ctx) {
        const users = await Controller.get(ctx, userService);
        ctx.body = users;
    }

    // 具体用户信息
    static async showUserDetail(ctx) {
        const user = await Controller.getById(ctx, userService);
        ctx.body = user;
    }

    // 添加用户
    static async addUser(ctx) {
        let user = await userService.getUserByName(ctx.request.body.username);
        user = await Controller.post(ctx, userService, user);
        ctx.body = user;
    }

    // 更新用户
    static async updateUser(ctx) {
        const user = await Controller.put(ctx, userService);
        ctx.body = user;
    }

    // 删除用户
    static async deleteUser(ctx) {
        await Controller.delete(ctx, userService);
    }

    // 批量删除
    static async deleteUsers(ctx) {
        await Controller.deletes(ctx, userService);
    }
}