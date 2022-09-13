# Vue.js+Node.js 开发实战

# Redis render
[Redis®*](https://render.com/docs/redis#connecting-to-your-redis-from-outside-render)

## redis store the json data type into the key
book:nav_menu is key, and the value is a string: string contains a array, array include a object
```

SET book:nav_menu '[{"name": "主页","src": "http://loaclhost"},{"name": "文章","src": "/article/list"}]'
```

SET book:footer '{"footer":[{"name": "版权所有: ","src": "http://loaclhost","text": "Stiller"}, {"name": "发送邮件","src": "mailto:uneedzf@gmail.com","text": "Gmail"}]}'

SET book:links '[{"name" : "baidu","src": "http://baidu.com"}]'

SET book:indexPic '[{"title": "baidu", "src": "http://baidu.com", "img": "http://xxxxx.com/xxx. jpg"}]'

## redis 命令行查看中文不乱码

```
redis-cli  --raw
```

[redis 命令行查看中文不乱码](https://blog.csdn.net/chwshuang/article/details/55258004)

## redis 如何查看所有的 key

```
redis> keys *
```

[redis 如何查看所有的 key](https://blog.csdn.net/lanyang123456/article/details/80717250)

## TypeError: Router.use() requires middleware function but got a Object

```
module.exports = router ;
```

[TypeError: Router.use() requires middleware function but got a Object](https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object/50007721)

## Redis DEL 命令

```
redis 127.0.0.1:6379> DEL KEY_NAME
```

[Redis DEL 命令](https://www.runoob.com/redis/keys-del.html)

## Reference:

[Vue.js+Node.js 开发实战：从入门到项目上线前言](https://weread.qq.com/web/reader/c7432440721c7eb2c74881fkecc32f3013eccbc87e4b62e)

## How to disable ESLint in vue-cli?

```
npm remove @vue/cli-plugin-eslint
```

[How to disable ESLint in vue-cli?](https://stackoverflow.com/questions/38757069/how-to-disable-eslint-in-vue-cli)

## TinyMCE

[TinyMCE](https://www.npmjs.com/package/tinymce)  
[TinyMCE support for Vue 3](https://www.tiny.cloud/blog/tinymce-vue-3-support/)

## babel.config.js

[Vue Cli 3 已经开始使用 babel.config.js，而不是.babelrc #211](https://github.com/vueComponent/ant-design-vue/issues/211)  
[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)  
[babel 到底该如何配置？](https://segmentfault.com/a/1190000011665642)

## Footer Centerning

[How TO - Center Elements Vertically](https://www.w3schools.com/howto/howto_css_center-vertical.asp)  
[CENTERING THINGS](https://www.w3.org/Style/Examples/007/center.en.html)

## Deployment

[Previewing Locally](https://cli.vuejs.org/guide/deployment.html#general-guidelines)

## Nginx run vue project

You can simply remove all the html file in the nginx folder, then place the dist content inside of it

```
brew services start nginx
open /usr/local/Cellar/nginx
二、Nginx配置文件路径
nginx.conf 配置文件位置:
/usr/local/etc/nginx/nginx.conf
nginx 安装目录:
/usr/local/Cellar/nginx
nginx 网站目录：
将打包的dist文件夹放到次目录下

/usr/local/var/www
启动：
sudo nginx
重启：

sudo nginx -s reload
退出：
sudo nginx -s quit

作者：hope20
链接：https://www.jianshu.com/p/093bba6ec8ef
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```
[Mac Nginx 部署 vue 项目](https://www.jianshu.com/p/093bba6ec8ef) 
[【YaconIT】Vue 项目部署到 Nginx 服务器](https://www.bilibili.com/video/BV1R741117ds/)  
[nginx 上部署前端项目](https://www.cnblogs.com/songmengyao/p/12298754.html)  
[手把手教 Nginx 部署 Vue 项目](https://juejin.cn/post/6844904096973979662)
[[vue]：vue 前端和 node 后端、通过 nginx 的服务器配置](https://mp.weixin.qq.com/s/Uuv6RLopAmps7y6dg_9v9g)

## Nginx

[Installing Nginx in Mac OS X Maverick With Homebrew](https://medium.com/@ThomasTan/installing-nginx-in-mac-os-x-maverick-with-homebrew-d8867b7e8a5a)  
[Installing NGINX on MAC](https://dev.to/arjavdave/installing-nginx-on-mac-46ac). 

## Turn off the PM2 and nginx

PM2
```
pm2 list'
pm2 stop appname
pm2 delete appname
```
[PM2关闭守护进程](https://www.geek-share.com/detail/2728036405.html)   
Nginx:

```
1001  ps -ef|grep nginx
sudo kill -QUIT 21813
sudo nginx -s stop
```
[Nginx在MAC上的安装、启动、重启和关闭](cnblogs.com/gujiande/p/10095192.html)   
[How to stop nginx on Mac OS X](https://newbedev.com/how-to-stop-nginx-on-mac-os-x)   
