import {
    Workshop
} from "../models/index.js";
import {
    WorkshopService
} from "../service/index.js";
import Controller from "./controller.js";


// 车间操作控制
export default class WorkshopController {
    static async listWorkshops(ctx) {
        const workshops = await Controller.listObjects(ctx, WorkshopService, Workshop);
        ctx.body = workshops;
    }

    static async showWorkshopDetail(ctx) {
        const workshop = await Controller.showObjectDetail(ctx, WorkshopService, Workshop);
        ctx.body = workshop;
    }

    static async addWorkshop(ctx) {
        const workshop = await WorkshopService.getObjectByPk(Workshop, ctx.params.id);
        workshop = await Controller.addObject(ctx, WorkshopService, Workshop, workshop);
        ctx.body = workshop;
    }

    static async updateWorkshop(ctx) {
        const workshop = await Controller.updateObject(ctx, WorkshopService, Workshop);
        ctx.body = workshop;
    }

    static async deleteWorkshop(ctx) {
        await Controller.deleteObject(ctx, WorkshopService, Workshop);
    }

    static async deleteWorkshops(ctx) {
        await Controller.deleteObjects(ctx, WorkshopService, Workshop);
    }
}