import {
    ProductLine
} from "../models/index.js";
import {
    ProductLineService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class ProductLineController {
    static async listProductLines(ctx) {
        const product_lines = await Controller.listObjects(ctx, ProductLineService, ProductLine);
        ctx.body = product_lines;
    }

    static async showProductLineDetail(ctx) {
        const product_line = await Controller.showObjectDetail(ctx, ProductLineService, ProductLine);
        ctx.body = product_line;
    }

    static async addProductLine(ctx) {
        const product_line = await ProductLineService.getObjectByPk(ProductLine, ctx.params.id);
        product_line = await Controller.addObject(ctx, ProductLineService, ProductLine, product_line);
        ctx.body = product_line;
    }

    static async updateProductLine(ctx) {
        const product_line = await Controller.updateObject(ctx, ProductLineService, ProductLine);
        ctx.body = product_line;
    }

    static async deleteProductLine(ctx) {
        await Controller.deleteObject(ctx, ProductLineService, ProductLine);
    }

    static async deleteProductLines(ctx) {
        await Controller.deleteObjects(ctx, ProductLineService, ProductLine);
    }
}