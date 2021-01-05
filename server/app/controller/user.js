import Context from "koa";


// 用户操作控制
export default class UserController {
    static async listUsers(ctx) {
        ctx.body = "ListUsers controller";
    }

    static async showUserDetail(ctx) {
        ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateUser(ctx) {
        ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`;
    }

    static async deleteUser(ctx) {
        ctx.body = `DeleteUser controller with ID = ${ctx.params.id}`;
    }
}