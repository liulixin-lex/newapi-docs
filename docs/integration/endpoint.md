---
title: "配置 CLI 工具"
description: "基础条件、主站端点、优化线路与 OpenAI 兼容 /v1 规则。"
---
# 配置 CLI 工具

## 基础条件

开始配置 CLI 前，请先完成以下步骤：

1. 完成 [环境检查](/getting-started/environment.html)，确保 Node.js 和 npm 可以正常使用。
2. 完成 [安装 CLI](/integration/manual-cli/environment.html#_2-安装cli)，安装 Claude Code、Codex、Gemini CLI。

## API 端点说明

登录控制台后，可以在“数据看板”左下角查看当前可用的 API 信息。

![数据看板左下角显示主站和优化线路 API 请求地址](/images/tutorial/15.png)

主站 Endpoint：`https://api.gguuai.com`，推荐优先使用，适合对稳定性要求较高的日常场景。

优化线路 Endpoint：`https://api.minimax.love`，优化线路，适合对延迟敏感的场景。

::: warning ❗️OpenAI 兼容端点需要添加 /v1

如果你使用的是 OpenAI 兼容格式的客户端或工具，例如 `Codex`、`OpenAI SDK`、`Cherry Studio` 的 OpenAI 兼容配置，请在 API 地址后添加 `/v1`：

```text
https://api.gguuai.com/v1  
https://api.minimax.love/v1
```

如果使用的是 `Claude Code`、`Gemini CLI` 等专用配置，请以对应教程中的示例为准。
:::

::: tip 🔔推荐配置

为了让配置过程进行尽量简单，我们极力推荐使用Github开源项目 CC-Switch来对我们的使用环境进行配置。

[CC-Switch 配置 Claude Code、Codex、Gemini 教程](/integration/cc-switch/index.html)
:::

::: info 备用方案

如果你不想使用 CC-Switch，也可以使用通用配置方式：

[Claude Code配置教程](/integration/manual-cli/claude-code.html)

[Codex配置教程](/integration/manual-cli/codex.html)

[Gemini配置教程](/integration/manual-cli/gemini.html)
:::

::: warning 注意
注意：不管你是使用哪个 CLI，请一定先完成上方基础条件，确保 Node.js、npm 和对应 CLI 都可以正常使用。
:::
