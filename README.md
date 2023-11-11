### 项目技术栈

- React 18
- Vite4
- Redux-Toolkit
- TS
- React-router-dom V6
- TDesign
- Axios

### 下载依赖

```bash

npm i pnpm

pnpm i
```

### 开发编译

```bash
pnpm dev
```

### 项目构建与全量打包

```bash

# 没做分包打包

#项目构建
pnpm build


# 构建测试平台
pnpm build:test

```

### 项目本地临时部署

```bash

#下载临时服务器
pnpm install -g serve


# 启动服务器
serve -s build


```

### 项目本地 Nginx 部署

```bash

#下载Nginx服务器 的安装包（网上）


# 把dist文件夹取代默认模板的html文件夹

# 启动Nginx服务器
nginx start

# 关闭Nginx服务器
nginx stop


```

### License

MIT 证书
