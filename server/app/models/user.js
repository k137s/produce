import {
    Sequelize
} from "sequelize";

import connector from "../service/script/connector.js";
import encrypt from "../utils/encrypt.js";


// 创建用户 User 模型，在数据库中保存为 user
const User = connector.define("User", {
    // 用户名
    username: {
        type: Sequelize.STRING(32), // varchar(255)
        allowNull: false, // 不允许为空
        unique: true,
        comment: "用户名",
        // validate: {
        //     is: /^[a-z][0-9a-z]{2, 15}$/i
        // }
    },
    password: {
        type: Sequelize.STRING(),
        allowNull: false,
        comment: "密码",
        // validate: {
        //     is: /^[a-z][0-9a-z]]*$/i
        // },
        // 加密操作
        set(val) {
            const passwd = encrypt(val);
            this.setDataValue("password", passwd);
        }
    },
    department: {
        type: Sequelize.ENUM,
        values: ["生产部", "工程部", "开发部", "销售部", "账务部", "管理员", "超管"],
        allowNull: false,
        defaultValue: "生产部",
        comment: "部门"
    }
}, {
    tableName: "users"
});


export default User;