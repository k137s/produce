import {
    Sequelize
} from "sequelize";

import config from "../../config/config.db.js";


// 获取数据库连接对象
const connector = new Sequelize(config);


export default connector;


async function main(db) {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        db.close();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// test 数据库连接
// main(connector);
// function main(db) {
//     db.authenticate().then(() => {
//         console.log("connection ok");
//         db.close();
//         // process.exit(); // 不退出会一直占用进程
//     }).catch(err => {
//         console.log("connection false");
//     })
// }