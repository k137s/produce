import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 销售
const Sale = connector.define("Sale", {
    name: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        comment: "销售名称"
    },
    phone: {
        type: Sequelize.STRING(32),
        allowNull: false,
        comment: "手机"
    },
}, {
    tableName: "sales"
});


export default Sale;