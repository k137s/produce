export default class Service {
    // 查找所有对象
    static async getObjects(Model) {
        const objects = await Model.findAndCountAll();
        return objects;
    }

    // 根据 id 查找对象
    static async getObjectByPk(Model, id) {
        const object = await Model.findByPk(id);
        return object;
    }

    // 添加对象
    static async createObject(Model, data) {
        const object = await Model.create(data);
        return object;
    }

    // 更新对象
    static async updateObject(object, data) {
        object = await object.update(data);
        return object;
    }

    // 删除一个对象
    static async deleteObject(Model, id) {
        await Model.destroy({
            where: {
                id: id
            }
        });
    }

    // 删除多个对象
    static async deleteObjects(Model, ids) {
        await Model.destroy({
            where: {
                id: ids
            }
        });
        return
    }
}