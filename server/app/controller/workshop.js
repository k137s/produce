import Context from "koa";


// 车间操作控制
export default class WorkshopController {
    static async listWorkshops(ctx) {
        ctx.body = "ListWorkshops controller";
    }

    static async showWorkshopDetail(ctx) {
        ctx.body = `ShowWorkshopDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateWorkshop(ctx) {
        ctx.body = `UpdateWorkshop controller with ID = ${ctx.params.id}`;
    }

    static async deleteWorkshop(ctx) {
        ctx.body = `DeleteWorkshop controller with ID = ${ctx.params.id}`;
    }
}