---
title: "Cherry Studio 配置"
description: "在 Cherry Studio 中添加 GGUUAI 提供商并检测连接。"
---
# 其他第三方客户端配置

::: tip 适合场景
如果你只想使用聊天客户端，可以直接看 Cherry Studio 配置。
:::

## Cherry Studio

Cherry Studio 是一个可视化 AI 客户端，适合不想写命令的新手用户，满足日常聊天需求。

## 下载地址：

[https://www.cherry-ai.com/download](https://www.cherry-ai.com/download)

## 使用方法

1. 打开 CherryStudio，点击右上角设置按钮，进入 `模型服务` 页面。

![Cherry Studio 设置中的模型服务页面](/images/tutorial/cherry-studio-01-model-services.webp)

1. 在模型服务列表底部点击 添加，新增一个提供商，并参考图中填写。

![Cherry Studio 模型服务列表底部添加新提供商](/images/tutorial/cherry-studio-02-add-provider.webp)

1. 进入刚创建的 GGUUAI 提供商，填写 API 配置。

- API 密钥：填写你的 GGUU API key
- API 地址：`{{API_BASE_URL}}`

![Cherry Studio 的 GGUUAI 提供商 API 密钥和 API 地址配置](/images/tutorial/cherry-studio-03-provider-settings.webp)

1. 点击 `获取模型列表`，在模型窗口中选择你要使用的模型，例如 `gpt-5.5`

![Cherry Studio 获取模型列表并选择 gpt-5.5 模型](/images/tutorial/cherry-studio-04-fetch-models.webp)

1. 点击右上角 `检测` 按钮，提示 `连接成功` 即可使用。

![Cherry Studio 检测连接成功提示](/images/tutorial/cherry-studio-05-connection-test.webp)

1. 回到 `首页`，左上角选择模型，进行聊天。

![Cherry Studio 首页中选择模型并开始聊天](/images/tutorial/cherry-studio-06-select-chat-model.webp)
