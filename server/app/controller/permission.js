import {
    Permission
} from "../models/index.js";
import {
    PermissionService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class PermissionController {
    static async listPermissions(ctx) {
        const permissions = await Controller.listObjects(ctx, PermissionService, Permission);
        ctx.body = permissions;
    }

    static async showPermissionDetail(ctx) {
        const permission = await Controller.showObjectDetail(ctx, PermissionService, Permission);
        ctx.body = permission;
    }

    static async addPermission(ctx) {
        const permission = await PermissionService.getObjectByPk(Permission, ctx.params.id);
        permission = await Controller.addObject(ctx, PermissionService, Permission, permission);
        ctx.body = permission;
    }

    static async updatePermission(ctx) {
        const permission = await Controller.updateObject(ctx, PermissionService, Permission);
        ctx.body = permission;
    }

    static async deletePermission(ctx) {
        await Controller.deleteObject(ctx, PermissionService, Permission);
    }

    static async deletePermissions(ctx) {
        await Controller.deleteObjects(ctx, PermissionService, Permission);
    }
}