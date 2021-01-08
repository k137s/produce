import {
    Craft
} from "../models/index.js";
import {
    CraftService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class CraftController {
    static async listCrafts(ctx) {
        const crafts = await Controller.listObjects(ctx, CraftService, Craft);
        ctx.body = crafts;
    }

    static async showCraftDetail(ctx) {
        const craft = await Controller.showObjectDetail(ctx, CraftService, Craft);
        ctx.body = craft;
    }

    static async addCraft(ctx) {
        const craft = await CraftService.getObjectByPk(Craft, ctx.params.id);
        craft = await Controller.addObject(ctx, CraftService, Craft, craft);
        ctx.body = craft;
    }

    static async updateCraft(ctx) {
        const craft = await Controller.updateObject(ctx, CraftService, Craft);
        ctx.body = craft;
    }

    static async deleteCraft(ctx) {
        await Controller.deleteObject(ctx, CraftService, Craft);
    }

    static async deleteCrafts(ctx) {
        await Controller.deleteObjects(ctx, CraftService, Craft);
    }
}