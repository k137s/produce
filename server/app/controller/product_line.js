import Context from "koa";


// 生产线操作控制
export default class ProductLineController {
    static async listProductLines(ctx) {
        ctx.body = "ListProductLines controller";
    }

    static async showProductLineDetail(ctx) {
        ctx.body = `ShowProductLineDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateProductLine(ctx) {
        ctx.body = `UpdateProductLine controller with ID = ${ctx.params.id}`;
    }

    static async deleteProductLine(ctx) {
        ctx.body = `DeleteProductLine controller with ID = ${ctx.params.id}`;
    }
}