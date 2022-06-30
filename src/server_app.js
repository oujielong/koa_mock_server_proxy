const mockData = require('./mockData/index.js');
const Koa = require('koa');
const cors = require('@koa/cors'); //跨域管理中间件
const koaBody = require('koa-body');
const app = new Koa();
app.use(cors());
app.use(koaBody());

app.use(async (ctx) => {
    let data = await mockData.matchApi_returnDate(ctx);
    ctx.body = data || '没有数据';
});
app.listen(3000);
