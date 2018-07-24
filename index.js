//app.js
const Koa = require('koa');
const wechat = require('co-wechat');

const app = new Koa();

app.use(async(ctx, next) => {  
    if (ctx.path === '/wechat') { //自定义的路由，微信后台配置的url
            
        await next();  
    } else {    
        ctx.body = `Hello, koa2! Path is: ${ctx.path}`;  
    }
});

app.use(wechat({  
    token: 'jiyr0119', //微信后台配置的token
      appid: 'wxdaeb0305e349b84c', //微信公众号的appid
      encodingAESKey: 'J2mKgDF3PcZbPIwz1DjNw15bX5mCYO79teYfSt7BG4n' //微信公众号的encodingAESKey
}));

app.listen(8080); //端口要跟花生壳里配置的对应