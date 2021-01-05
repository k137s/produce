import Context from "koa";


// 角色操作控制
export default class RoleController {
    static async listRoles(ctx) {
        ctx.body = "ListRoles controller";
    }

    static async showRoleDetail(ctx) {
        ctx.body = `ShowRoleDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateRole(ctx) {
        ctx.body = `UpdateRole controller with ID = ${ctx.params.id}`;
    }

    static async deleteRole(ctx) {
        ctx.body = `DeleteRole controller with ID = ${ctx.params.id}`;
    }
}