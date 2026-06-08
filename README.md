# GGUU API Docs

本项目是 GGUU API 中转站教程文档站，使用 VitePress 构建，可部署到 Cloudflare Pages 或 GitHub Pages。

## 技术栈

- VitePress 1.x
- Markdown 文档源码
- Cloudflare Pages
- GitHub Actions
- GitHub Pages

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
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
Production branch: main
```

环境变量建议设置：

```text
NODE_VERSION=22
```

Cloudflare Pages 默认部署在站点根路径，不需要额外设置 `BASE_PATH`。

## GitHub Pages 部署

项目已包含 GitHub Actions 工作流：

```text
.github/workflows/deploy.yml
```

部署步骤：

1. 将项目推送到 GitHub 仓库的 `main` 分支。
2. 在 GitHub 仓库中打开 `Settings` → `Pages`。
3. 将 `Build and deployment` 的 `Source` 设为 `GitHub Actions`。
4. 推送后等待 `Deploy VitePress site to GitHub Pages` 工作流完成。

构建输出目录为：

```text
docs/.vitepress/dist
```

工作流会自动设置 VitePress 的 `base`：

- 仓库名为 `用户名.github.io` 时，使用根路径 `/`。
- 普通项目仓库会使用 `/<仓库名>/`，适配 `https://用户名.github.io/仓库名/`。
- 如果使用自定义域名或有特殊路径，可以在 GitHub 仓库的 `Settings` → `Secrets and variables` → `Actions` → `Variables` 中添加 `PAGES_BASE_PATH` 覆盖。
