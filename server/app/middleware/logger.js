// 打印 url 访问时间
export default function logger() {
    return async (ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
    };
}