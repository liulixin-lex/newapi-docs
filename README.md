# GGUU API Site

本项目是 GGUU API 的统一静态站点，包含官网首页和 VitePress 文档站，推荐部署到 Cloudflare Pages。

## 技术栈

- VitePress 1.x
- 静态 HTML 首页
- Markdown 文档源码
- Cloudflare Pages

## 站点结构

```text
/        官网首页
/docs/   使用文档
```

核心链接、API 地址和标准链接统一维护在：

```text
site.config.json
```

后续需要修改 `baseURL`、登录入口、文档入口或自定义域名时，优先修改这个文件。

## 本地运行

安装依赖后启动开发预览：

```bash
npm ci
npm run docs:dev
```

构建静态站点：

```bash
npm run build
```

只构建文档站：

```bash
npm run docs:build
```

预览文档站构建结果：

```bash
npm run docs:preview
```

打开地址应使用站点根路径，例如：

```text
http://127.0.0.1:4173/
```

## Cloudflare Pages 部署

推荐使用 Cloudflare Pages 直接连接 GitHub 仓库部署。

Cloudflare Pages 构建设置：

```text
Framework preset: None
Build command: npm run build
Build output directory: dist-site
Root directory: 留空，不要填写 /
Production branch: main
```

环境变量建议设置：

```text
NODE_VERSION=22
```

构建脚本会自动把首页输出到站点根路径，并把 VitePress 文档输出到 `/docs/`。

## 日常更新流程

后续更新首页、文档或 `site.config.json` 后，提交到 GitHub 仓库的 `main` 分支即可。Cloudflare Pages 会自动拉取最新代码、执行构建并发布。

推荐每次提交前先本地运行：

```bash
npm test
npm run build
```
