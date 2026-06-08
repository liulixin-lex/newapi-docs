# GGUU API Docs

本项目是 GGUU API 中转站教程文档站，使用 VitePress 构建，推荐部署到 Cloudflare Pages。

## 技术栈

- VitePress 1.x
- Markdown 文档源码
- Cloudflare Pages

## 本地运行

安装依赖后启动开发预览：

```bash
npm ci
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

预览构建后的静态站点：

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
Framework preset: VitePress
Build command: npm run build
Build output directory: docs/.vitepress/dist
Root directory: 留空，不要填写 /
Production branch: main
```

环境变量建议设置：

```text
NODE_VERSION=22
```

Cloudflare Pages 默认部署在站点根路径，不需要额外设置 `BASE_PATH`。

## 日常更新流程

后续更新文档时，修改 Markdown 或图片后提交到 GitHub 仓库的 `main` 分支即可。Cloudflare Pages 会自动拉取最新代码、执行构建并发布。

推荐每次提交前先本地运行：

```bash
npm run docs:build
```
