import {
    UserService
} from "../service/user.js"

// 用户操作控制
export default class UserController {
    // 获取用户列表
    static async listUsers(ctx) {
        let users = await UserService.getUsers();
        ctx.body = users;
    }

    // 具体用户信息
    static async showUserDetail(ctx) {
        let user = await UserService.getUserByPK(ctx.params.id);
        ctx.body = user;
    }

    // 添加用户
    static async addUser(ctx) {
        let user = await UserService.getUserByName(ctx.request.body.username);
        if (user) {
            ctx.message = "username is exists!";
            return
        } else {
            user = await UserService.createUser(ctx.request.body);
            ctx.body = user;
        }
    }

    // 更新用户
    static async updateUser(ctx) {
        let user = await UserService.getUserByPK(ctx.params.id);
        if (!user) {
            ctx.message = "username is not exists!";
            return
        } else {
            await UserService.updateUser(user, ctx.request.body);
            ctx.body = user;
        }
    }

    // 删除用户
    static async deleteUser(ctx) {
        let user = await UserService.getUserByPK(ctx.params.id);
        if (!user) {
            ctx.message = "username is not exists!";
            return
        } else {
            await UserService.deleteUser(user);
            ctx.body = "user is destroy!";
        }
    }

    // 批量删除
    static async deleteUsers(ctx) {
        let ids = ctx.request.body.id;
        if (ids) {
            await UserService.deleteUsers(ids);
            ctx.body = "user is destroy!";
        }
    }
}