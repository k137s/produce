// 操作控制
export default class Controller {
    static objectId = [];
    static objectList = [];

    // 将对象存储到列表
    static async getObject(ctx, Service, Model) {
        const id = ctx.params.id;
        if (Controller.objectId.indexOf(id) === -1) {
            // console.log(`if${id}`);
            const obj = await Service.getObjectByPk(Model, id);
            if (!obj) {
                return "object is not exists"
            }
            if (Controller.objectId.length >= 10) {
                Controller.objectId.shift();
                Controller.objectList.shift();
            }
            Controller.objectId.push(id);
            Controller.objectList.push({
                id,
                obj
            });
            return obj;
        } else {
            for (const item of Controller.objectList) {
                if (item.id === id) {
                    return item.obj;
                }
            }
        }
    }

    static async popObject(id) {
        const index = Controller.objectId.indexOf(id);
        Controller.objectId.splice(index, 1);
        for (const item of Controller.objectList) {
            if (item.id === id) {
                const indexObj = Controller.objectList.indexOf(item);
                Controller.objectList.splice(indexObj, 1);
            }
        }
    }

    // 获取列表
    static async listObjects(ctx, Service, Model) {
        const objects = await Service.getObjects(Model);
        return objects;
    }

    // 具体对象信息
    static async showObjectDetail(ctx, Service, Model) {
        const object = await Service.getObjectByPk(Model, ctx.params.id);
        // const object = await Controller.getObject(ctx, Service, Model);
        if (!object) {
            ctx.body = "object not exists";
            return
        }
        return object;
    }

    // 添加对象
    static async addObject(ctx, Service, Model, object) {
        if (object) {
            ctx.status = 200;
            ctx.message = "objectname is exists!";
            return
        } else {
            object = await Service.createObject(Model, ctx.request.body);
            return object;
        }
    }

    // 更新对象
    static async updateObject(ctx, Service, Model) {
        const object = await Service.getObjectByPk(Model, ctx.params.id);
        // const object = await Controller.getObject(ctx, Service, Model);
        if (!object) {
            ctx.message = "objectname is not exists!";
            return
        } else {
            object = await Service.updateObject(object, ctx.request.body);
            // Controller.popObject(ctx.params.id);
            return object;
        }
    }

    // 删除对象
    static async deleteObject(ctx, Service, Model) {
        const object = await Service.getObjectByPk(Model, ctx.params.id);
        // const object = await Controller.getObject(ctx, Service, Model);
        if (!object) {
            ctx.message = "objectname is not exists!";
            ctx.body = "not exists"
            return
        } else {
            await Service.deleteObject(Model, ctx.params.id);
            // Controller.popObject(ctx.params.id);
            ctx.body = "object is destroy!";
        }
    }

    // 批量删除
    static async deleteObjects(ctx, Service, Model) {
        const ids = ctx.request.body.id;
        if (ids) {
            await Service.deleteObjects(Model, ids);
            ctx.body = "object is destroy!";
        }
    }
}