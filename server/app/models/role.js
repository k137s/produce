import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 角色
const Role = connector.define("Role", {
    name: {
        type: Sequelize.STRING(32),
        allowNull: false,
        comment: "角色名称"
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "角色描述"
    },
    menu: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "角色所属菜单",
        defaultValue: "[]"
    },
    permission: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "角色所属权限",
        defaultValue: "[]"
    }
}, {
    tableName: "roles"
});


export default Role;