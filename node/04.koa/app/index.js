const Koa = require('koa');
const app = new Koa();
const apiRouter = require('./router/api')
// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });
// 接口
app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods());
app.listen(3000);