import {
    Tag
} from "../models/index.js";
import {
    TagService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class TagController {
    static async listTags(ctx) {
        const tags = await Controller.listObjects(ctx, TagService, Tag);
        ctx.body = tags;
    }

    static async showTagDetail(ctx) {
        const tag = await Controller.showObjectDetail(ctx, TagService, Tag);
        ctx.body = tag;
    }

    static async addTag(ctx) {
        const tag = await TagService.getObjectByPk(Tag, ctx.params.id);
        tag = await Controller.addObject(ctx, TagService, Tag, tag);
        ctx.body = tag;
    }

    static async updateTag(ctx) {
        const tag = await Controller.updateObject(ctx, TagService, Tag);
        ctx.body = tag;
    }

    static async deleteTag(ctx) {
        await Controller.deleteObject(ctx, TagService, Tag);
    }

    static async deleteTags(ctx) {
        await Controller.deleteObjects(ctx, TagService, Tag);
    }
}