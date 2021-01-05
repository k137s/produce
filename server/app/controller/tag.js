import Context from "koa";


// 标签操作控制
export default class TagController {
    static async listTags(ctx) {
        ctx.body = "ListTags controller";
    }

    static async showTagDetail(ctx) {
        ctx.body = `ShowTagDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateTag(ctx) {
        ctx.body = `UpdateTag controller with ID = ${ctx.params.id}`;
    }

    static async deleteTag(ctx) {
        ctx.body = `DeleteTag controller with ID = ${ctx.params.id}`;
    }
}