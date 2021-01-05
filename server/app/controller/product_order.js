import Context from "koa";


// 客户订单操作控制
export default class ProductOrderController {
    static async listProductOrders(ctx) {
        ctx.body = "ListProductOrders controller";
    }

    static async showProductOrderDetail(ctx) {
        ctx.body = `ShowProductOrderDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateProductOrder(ctx) {
        ctx.body = `UpdateProductOrder controller with ID = ${ctx.params.id}`;
    }

    static async deleteProductOrder(ctx) {
        ctx.body = `DeleteProductOrder controller with ID = ${ctx.params.id}`;
    }
}