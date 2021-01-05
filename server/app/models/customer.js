import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 客户
const Customer = connector.define("Customer", {
    name: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true,
        comment: "客户名称"
    },
    phone: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        comment: "联系方式"
    },
    qq: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: true,
        comment: "客户QQ"
    },
    address: {
        type: Sequelize.STRING(),
        allowNull: false,
        comment: "地址"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "客户详情"
    }
}, {
    tableName: "customers"
});


export default Customer;