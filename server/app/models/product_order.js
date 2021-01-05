import {
    Sequelize
} from "sequelize";
import moment from "moment";

import connector from "../service/script/connector.js";


// 订单
const ProductOrder = connector.define("ProductOrder", {
    orderId: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true,
        comment: "订单号",
        defaultValue: "OGS",
        set(val) {
            const title = "QSF";
            const menu = "-NODE-";
            const time = Date.now();
            this.setDataValue("orderId", `${title}${menu}${val}-${time}`)
        }
    },
    status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["完成", "出货", "待出货", "生产中", "待生产"],
        comment: "订单状态",
        defaultValue: "待生产"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "订单详情"
    },
    createTime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue(createTime)).format("YYYY-MM-DD HH:mm:ss");
        },
        comment: "生产日期"
    },
    deliveryTime: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue(createTime)).format("YYYY-MM-DD HH:mm:ss");
        },
        comment: "交货日期"
    },
}, {
    tableName: "product_orders",
});


export default ProductOrder;