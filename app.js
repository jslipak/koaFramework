const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody())

let products = require('./products.js')
app.use(products.routes());

const Port = 8000;
const server  = app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
});

server.on('error', err => console.log(`Error en servidon Koa: ${err}`));


