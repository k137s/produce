import crypto from "crypto";


// 加密
function encrypt(secret) {
    const hash = crypto.createHmac("sha256", secret)
        .update("node koa sequelize")
        .digest("hex");
    return hash;
}


export default encrypt;