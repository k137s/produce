import {
    User
} from "../models/index.js"
import {
    UserService
} from "../service/index.js"
import Controller from "./controller.js";


// 用户操作控制
export default class UserController {
    // 获取用户列表
    static async listUsers(ctx) {
        const users = await Controller.listObjects(ctx, UserService, User);
        ctx.body = users;
    }

    // 具体用户信息
    static async showUserDetail(ctx) {
        const user = await Controller.showObjectDetail(ctx, UserService, User);
        ctx.body = user;
    }

    // 添加用户
    static async addUser(ctx) {
        const user = await UserService.getUserByName(User, ctx.request.body.username);
        user = await Controller.addObject(ctx, UserService, User, user);
        ctx.body = user;
    }

    // 更新用户
    static async updateUser(ctx) {
        const user = await Controller.updateObject(ctx, UserService, User);
        ctx.body = user;
    }

    // 删除用户
    static async deleteUser(ctx) {
        await Controller.deleteObject(ctx, UserService, User);
    }

    // 批量删除
    static async deleteUsers(ctx) {
        await Controller.deleteObjects(ctx, UserService, User);
    }
}