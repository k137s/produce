import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";


// 标签
const Tag = connector.define("Tag", {
    name: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
        comment: "标签"
    },
}, {
    tableName: "tags"
});


export default Tag;