import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 权限
class Permission extends Sequelize.Model {}

Permission.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: "权限名称”"
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "权限接口地址"
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "接口类型"
    },
    basename: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "上级节点名称"
    },
    basepath: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "上级节点地址"
    },
    isEnable: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: "是否启用"
    },
    isShow: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: "是否显示"
    }
}, {
    sequelize: connector,
    modelName: "Permission",
    tableName: "permissions"
});


export default Permission;