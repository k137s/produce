import {
    Sequelize,
} from "sequelize"

import connector from "../service/script/connector.js";


// 工艺
class Craft extends Sequelize.Model {}

Craft.init({
    name: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        comment: "工艺名称"
    },
    prefix: {
        type: Sequelize.STRING(32),
        allowNull: false,
        comment: "工艺简称"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "工艺流程"
    },
}, {
    sequelize: connector,
    modelName: "Craft", // 模型名
    tableName: "crafts" // 数据库表名
});


export default Craft;