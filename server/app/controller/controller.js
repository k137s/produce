// 操作控制
export default class Controller {

    // 获取列表
    static async get(ctx, Service) {
        const objects = await Service.getObjects();
        return objects;
    }

    // 具体对象信息
    static async getById(ctx, Service) {
        const object = await Service.getObjectByPk(ctx.params.id);
        if (!object) {
            ctx.body = "object not exists";
            return ctx.body;
        }
        return object;
    }

    // 添加对象
    static async post(ctx, Service, object) {
        if (object) {
            // ctx.status = 200;
            // ctx.message = "objectname is exists!";
            return "objectname is exists!33333333333"
        } else {
            object = await Service.createObject(ctx.request.body);
            return object;
        }
    }

    // 更新对象
    static async put(ctx, Service) {
        const object = await Service.getObjectByPk(ctx.params.id);
        if (!object) {
            ctx.message = "objectname is not exists!";
            return
        } else {
            object = await Service.updateObject(object, ctx.request.body);
            return object;
        }
    }

    // 删除对象
    static async delete(ctx, Service) {
        const object = await Service.getObjectByPk(ctx.params.id);
        if (!object) {
            ctx.message = "objectname is not exists!";
            ctx.body = "not exists"
            return
        } else {
            await Service.deleteObject(ctx.params.id);
            ctx.body = "object is destroy!";
        }
    }

    // 批量删除
    static async deletes(ctx, Service) {
        const ids = ctx.request.body.id;
        if (ids) {
            await Service.deleteObjects(ids);
            ctx.body = "object is destroy!";
        }
    }
}