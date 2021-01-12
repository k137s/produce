/**
 * curd
 */

export default class Service {

    constructor(Model) {
        this.Model = Model
    }

    // 查找所有对象
    async getObjects() {
        const objects = await this.Model.findAndCountAll();
        return objects;
    }

    // 根据 id 查找对象
    async getObjectByPk(id) {
        const object = await this.Model.findByPk(id);
        return object;
    }

    // 添加对象
    async createObject(data) {
        const object = await this.Model.create(data);
        return object;
    }

    // 更新对象
    async updateObject(object, data) {
        object = await object.update(data);
        return object;
    }

    // 删除一个对象
    async deleteObject(id) {
        await this.Model.destroy({
            where: {
                id: id
            }
        });
    }

    // 删除多个对象
    async deleteObjects(ids) {
        await this.Model.destroy({
            where: {
                id: ids
            }
        });
        return
    }
}