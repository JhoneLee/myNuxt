import Koa from 'koa';
import consola from 'consola';
import { Nuxt, Builder } from 'nuxt';
import bodyParser from 'koa-bodyparser'
import config from '../nuxt.config';
import apiRouter from './api';
import catchErr from './middleware/catchErr';
import page404 from './middleware/page404';
// 引入session
import session from 'koa-session2';
import CONF,{verify} from './middleware/session';
// 引入redis 管理session
import store from './redis';
const app = new Koa()

// Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')
// 捕捉错误
app.use(catchErr);
// 引入session
app.keys = ['jgs-baifae'];
let sessConf = Object.assign({},CONF,{store});
app.use(session(sessConf));
// post body参数序列化
app.use(bodyParser());
// session 校验
app.use(verify);
// 加载路由
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
// 404 处理
// app.use(page404);
async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
