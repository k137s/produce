import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 生产线
const ProduceLine = connector.define("ProduceLine", {
    sequence: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        comment: "生产线号"
    },
    name: {
        type: Sequelize.STRING(32),
        allowNull: false,
        comment: "名称"
    },
    status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["生产中", "研发测试", "待机", "维护"],
        defaultValue: "生产中",
        comment: "状态"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "详情"
    },
}, {
    tableName: "produce_lines"
});


export default ProduceLine;