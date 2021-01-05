import {
    User
} from "../models/index.js"


class UserService {
    // 查找所有用户
    static async getUsers() {
        let users = await User.findAndCountAll();
        return users;
    }

    // 根据 id 查找用户
    static async getUserByPK(id) {
        let user = await User.findByPk(id);
        return user;
    }

    // 根据用户名查找
    static async getUserByName(name) {
        let user = await User.findOne({
            where: {
                username: name
            }
        });
        return user;
    }

    // 新建用户
    static async createUser(data) {
        let user = await User.create(data);
        return user;
    }

    // 更新用户信息
    static async updateUser(user, data) {
        await user.update(data);
    }

    // 删除用户
    static async deleteUser(user) {
        await user.destroy();
    }

    // 根据用户 id 删除多个用户
    static async deleteUsers(ids) {
        await User.destroy({
            where: {
                id: ids
            }
        });
    }
}


export {
    UserService
};