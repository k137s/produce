import {
    ProductOrder
} from "../models/index.js";
import {
    ProductOrderService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class ProductOrderController {
    static async listProductOrders(ctx) {
        const product_orders = await Controller.listObjects(ctx, ProductOrderService, ProductOrder);
        ctx.body = product_orders;
    }

    static async showProductOrderDetail(ctx) {
        const product_order = await Controller.showObjectDetail(ctx, ProductOrderService, ProductOrder);
        ctx.body = product_order;
    }

    static async addProductOrder(ctx) {
        const product_order = await ProductOrderService.getObjectByPk(ProductOrder, ctx.params.id);
        product_order = await Controller.addObject(ctx, ProductOrderService, ProductOrder, product_order);
        ctx.body = product_order;
    }

    static async updateProductOrder(ctx) {
        const product_order = await Controller.updateObject(ctx, ProductOrderService, ProductOrder);
        ctx.body = product_order;
    }

    static async deleteProductOrder(ctx) {
        await Controller.deleteObject(ctx, ProductOrderService, ProductOrder);
    }

    static async deleteProductOrders(ctx) {
        await Controller.deleteObjects(ctx, ProductOrderService, ProductOrder);
    }
}