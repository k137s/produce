import {
    Role
} from "../models/index.js";
import {
    RoleService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class RoleController {
    static async listRoles(ctx) {
        const roles = await Controller.listObjects(ctx, RoleService, Role);
        ctx.body = roles;
    }

    static async showRoleDetail(ctx) {
        const role = await Controller.showObjectDetail(ctx, RoleService, Role);
        ctx.body = role;
    }

    static async addRole(ctx) {
        const role = await RoleService.getObjectByPk(Role, ctx.params.id);
        role = await Controller.addObject(ctx, RoleService, Role, role);
        ctx.body = role;
    }

    static async updateRole(ctx) {
        const role = await Controller.updateObject(ctx, RoleService, Role);
        ctx.body = role;
    }

    static async deleteRole(ctx) {
        await Controller.deleteObject(ctx, RoleService, Role);
    }

    static async deleteRoles(ctx) {
        await Controller.deleteObjects(ctx, RoleService, Role);
    }
}