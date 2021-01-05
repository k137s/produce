import Context from "koa";


// 销售操作控制
export default class SaleController {
    static async listSales(ctx) {
        ctx.body = "ListSales controller";
    }

    static async showSaleDetail(ctx) {
        ctx.body = `ShowSaleDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateSale(ctx) {
        ctx.body = `UpdateSale controller with ID = ${ctx.params.id}`;
    }

    static async deleteSale(ctx) {
        ctx.body = `DeleteSale controller with ID = ${ctx.params.id}`;
    }
}