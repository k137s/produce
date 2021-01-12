export default function () {
    return async (ctx, next) => {
        await next();
        ctx.body = {
            code: ctx.status || 404,
            msg: ctx.message || "msg",
            body: ctx.body || "body"
        }
    }
}