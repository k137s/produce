import connector from "../service/script/connector.js";

import Craft from "./craft.js";
import Customer from "./customer.js";
import Permission from "./permission.js";
import ProductLine from "./product_line.js";
import ProductOrder from "./product_order.js";
import Role from "./role.js";
import Sale from "./sale.js";
import Tag from "./tag.js";
import User from "./user.js";
import Workshop from "./workshop.js";


// 创建一对一，车间与生产线
Workshop.hasOne(ProductLine, {
    foreignKey: {
        name: "workshop_id",
        allowNull: false
    },
    sourceKey: "id"
});

ProductLine.belongsTo(Workshop, {
    foreignKey: {
        name: "workshop_id",
        allowNull: false
    },
    targetKey: "id"
});

// 创建一对多，客户与订单
Customer.hasMany(ProductOrder, {
    foreignKey: "customer_id",
    sourceKey: "id",
    as: "Orders"
});

ProductOrder.belongsTo(Customer, {
    foreignKey: "customer_id",
    targetKey: "id",
    as: "Customer"
});

// 创建一对多，销售与订单
Sale.hasMany(ProductOrder, {
    foreignKey: "sale_id",
    sourceKey: "id",
    as: "Orders"
});

ProductOrder.belongsTo(Sale, {
    foreignKey: "sale_id",
    targetKey: "id",
    as: "Sale"
});

// 创建一对多，销售与客户
Sale.hasMany(Customer, {
    foreignKey: "sale_id",
    sourceKey: "id",
    as: "Customers"
});

Customer.belongsTo(Sale, {
    foreignKey: "sale_id",
    targetKey: "id",
    as: "Sale"
});

// 多对多
Workshop.belongsToMany(Tag, {
    through: "workshop_tag",
    as: "Tags",
    foreignKey: {
        name: "tag_id",
        allowNull: false
    },
});

Tag.belongsToMany(Workshop, {
    through: "workshop_tag",
    as: "Workshops",
    foreignKey: {
        name: "workshop_id",
        allowNull: false
    },
});

// 用户和角色
Role.hasMany(User, {
    foreignKey: "role_id",
    sourceKey: "id"
});

User.belongsTo(Role, {
    foreignKey: "role_id",
    targetKey: "id"
})


export {
    connector,
    Craft,
    Customer,
    Permission,
    ProductLine,
    ProductOrder,
    Role,
    Sale,
    Tag,
    User,
    Workshop
};