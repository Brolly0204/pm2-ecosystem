# pm2 Deploy

## 安装pm2

```
sudo npm install -g pm2
```

## 初始化pm2 ecosystem配置文件

```
pm2 ecosystem
```

## 编辑ecosystem.json

```
{
  apps : [
    {
      name      : "API",
      script    : "app.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },

    // Second application
    {
      name      : "WEB",
      script    : "web.js"
    }
  ],
  deploy : {
    production : {
      user : "node",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/production",
      "post-deploy" : "npm install ; pm2 startOrRestart ecosystem.json --env production"
    },
    dev : {
      user : "node",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/development",
      "post-deploy" : "npm install ; pm2 startOrRestart ecosystem.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
```
## 解析配置文件
user :登录用户名
host : 要部署的目标服务器或者域名
ref : 用于部署代码时的分支
repo : git 仓库地址
path : 在目标服务器上部署的文件目录地址
post-deploy : 部署后启动的脚本

## 执行部署
```
pm2 deploy ecosystem.json production
```

## 更新部署

```
pm2 deploy production update
```
