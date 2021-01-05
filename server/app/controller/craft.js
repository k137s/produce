import Context from "koa";


// 用户操作控制
export default class CraftController {
    static async listCrafts(ctx) {
        ctx.body = "ListCrafts controller";
    }

    static async showCraftDetail(ctx) {
        ctx.body = `ShowCraftDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateCraft(ctx) {
        ctx.body = `UpdateCraft controller with ID = ${ctx.params.id}`;
    }

    static async deleteCraft(ctx) {
        ctx.body = `DeleteCraft controller with ID = ${ctx.params.id}`;
    }
}