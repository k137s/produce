import {
    database,
    username,
    password,
    dialect,
    host,
    port,
    pool,
    timezone,
    logging,
    define
} from "./.config/config.db.js"

export default {
    database,
    username,
    password,
    dialect,
    host,
    port,
    pool, // 连接池
    timezone, // 时区
    logging, // 日志
    define // 数据表相关
}