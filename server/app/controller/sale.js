import {
    Sale
} from "../models/index.js";
import {
    SaleService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class SaleController {
    static async listSales(ctx) {
        const sales = await Controller.listObjects(ctx, SaleService, Sale);
        ctx.body = sales;
    }

    static async showSaleDetail(ctx) {
        const sale = await Controller.showObjectDetail(ctx, SaleService, Sale);
        ctx.body = sale;
    }

    static async addSale(ctx) {
        const sale = await SaleService.getObjectByPk(Sale, ctx.params.id);
        sale = await Controller.addObject(ctx, SaleService, Sale, sale);
        ctx.body = sale;
    }

    static async updateSale(ctx) {
        const sale = await Controller.updateObject(ctx, SaleService, Sale);
        ctx.body = sale;
    }

    static async deleteSale(ctx) {
        await Controller.deleteObject(ctx, SaleService, Sale);
    }

    static async deleteSales(ctx) {
        await Controller.deleteObjects(ctx, SaleService, Sale);
    }
}