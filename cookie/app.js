const Koa = require("koa");
const app = new Koa();
// 签名需要设置 key
app.keys = ["shen"];
app.use(async (ctx)=>{
    if (ctx.url === '/index') {
        const cookie = ctx.cookies.get('cid');
        console.log(cookie);
        ctx.cookies.set("cid", "hello-world", {
          domain: "localhost", // 写cookie所在的域名
          path: "/index", // 写cookie所在的路径
          maxAge: 10 * 60 * 1000, // cookie有效时长
          expires: new Date("2017-02-15"), // cookie失效时间
          httpOnly: true, // 是否只用于http请求中获取
          overwrite: false, // 是否允许重写
          signed: true
        });
        ctx.body = "cookie is ok";
    }else{
        ctx.body = "hello world"; 
    }
})
app.listen(3000,()=>{
    console.log("server is starting at port 3000");
})