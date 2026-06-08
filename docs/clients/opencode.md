---
title: "OpenCode 配置"
description: "安装 OpenCode，并通过 CC-Switch 添加 GGUUAI 渠道。"
---
# OpenCode

**一个开源的 AI 编程助手，可在终端、IDE 或桌面环境中辅助编写、调试和改进代码。**

## 全局安装

1. 打开你的终端，运行以下命令全局安装OpenCode

```bash
npm install -g opencode-ai
```

1. 安装完成后，在终端输入 `opencode` 命令若出现界面，则安装成功

![终端运行 opencode 命令并进入 OpenCode 界面](/images/tutorial/opencode-01-terminal-open.webp)

1. 查看 [CC-Switch 软件下载](/integration/cc-switch/download.html) 一节的内容，下载并安装 CC-Switch 到本地，安装并打开软件
2. 上方配置项选择到 `OpenCode`，然后点击 `添加供应商` 按钮

![CC-Switch 中切换到 OpenCode 分组并添加供应商](/images/tutorial/opencode-02-add-provider.webp)

1. 选择 `自定义配置`

![OpenCode 供应商配置中选择自定义配置](/images/tutorial/opencode-03-custom-provider.webp)

1. 添加各项配置

- 在 `供应商标识` 中填写分组名称，比如 `codex`
- 在 `接口格式` 中选择模型对应的协议
- Claude系列模型：`Anthropic`
- Codex系列模型：`OpenAI Responses` 或 `OpenAI Compatible`
- Gemini系列模型：`Google (Gemini)`

![OpenCode 自定义供应商中填写供应商标识和接口格式](/images/tutorial/opencode-04-provider-id.webp)

- 在 `API Key` 中填入 [创建API令牌](/getting-started/api-token.html) 一节中你创建的 Key
- 在 `额外选项` 中配置键值对 `{"setCacheKey":true}`

1. 全部配置好后，点击右下角 添加 按钮

**参考配置**

![OpenCode 参考配置中填写 API Key 和额外选项](/images/tutorial/opencode-05-reference-config.webp)

1. 在界面中选择刚配置好的 PackyApi 渠道，点击添加按钮

![OpenCode 界面中选择刚配置的 GGUUAI 渠道并添加](/images/tutorial/opencode-06-add-channel.webp)

## 验证配置

1. 重新打开终端，输入 `opencode` 运行
2. 输入 `/models` 命令，观察刚才配置的 GGUUAI的渠道是否存在，如果存在则配置成功，可以直接使用

![OpenCode 的 /models 输出中显示已配置的 GGUUAI 渠道](/images/tutorial/opencode-07-models-output.webp)
