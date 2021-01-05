import {
    connector
} from "../../models/index.js"


// console.log(connector.models);
(async () => {
    // alertSync(connector);
    forceSync(connector);
    // destroyAll(connector);
})();

// async & await 同步
async function alterSync(db) {
    try {
        await db.sync({
            alter: true
        });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log(error);
    }
    connector.close();
}

async function forceSync(db) {
    try {
        await db.sync({
            force: true
        });
        console.log("用户模型表刚刚(重新)创建！");
    } catch (error) {
        console.log(error);
    }
    connector.close();
}

async function destroyAll(db) {
    // // 删除与模型相关的表
    // await User.drop();
    // console.log("User table dropped!");
    // // 删除所有表
    try {
        await db.drop();
        console.log("All tables dropped!");
    } catch (error) {
        console.log(error);
    }
    connector.close();
}

// process.exit(); // 不退出会一直占用进程
// // 标准同步
// // 只有当数据库中不存在与模型同名的数据表时，才会同步
// await db.sync()
// // 动态同步
// // 修改同名数据表结构，以适用模型。
// await db.sync({
//     alter: true
// })
// // 强制同步
// // 删除同名数据表后同步，谨慎使用，会导致数据丢失
// await db.sync({
//     force: true
// })
// 另外，当你指定表与表之间的关联后，修改被关联的表结构时会抛出异常。
// 需要先注释掉关联代码，然后更新同步模型后，再取消掉注释即可。
// 再另外，当你有新的关联时必须使用动态同步才会生效。