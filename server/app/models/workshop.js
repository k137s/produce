import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 创建车间模型，数据库保存为 modelName: workshop
const Workshop = connector.define("Workshop", {
    title: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        comment: "车间名"
    },
    status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["投产", "建造", "待机", "维护"],
        defaultValue: "投产",
        comment: "车间状态"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "车间详情"
    },
}, {
    tableName: "workshops"
});


export default Workshop;