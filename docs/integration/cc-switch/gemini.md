---
title: "用 CC-Switch 配置 Gemini"
description: "在 CC-Switch 中配置 Gemini 分组、API Key 和请求地址。"
---
# Gemini配置

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![CC-Switch 初始界面，用于开始配置 Gemini](/images/tutorial/cc-switch-gemini-01-start-screen.webp)

1. 在分组条中，将分组选择至“Gemini”

![CC-Switch 分组栏中选择 Gemini 分组](/images/tutorial/cc-switch-gemini-02-select-group.webp)

1. 在供应商分组中，选择如图的“自定义配置”

![Gemini 分组中选择自定义配置供应商](/images/tutorial/cc-switch-gemini-03-custom-provider.webp)

1. 回顾 [创建API令牌](/getting-started/api-token.html)，在 GGUU API 中创建 Gemini 分组的令牌，点击复制按钮，复制API Key到剪切板

![GGUU API 控制台中复制 Gemini 分组 API Key](/images/tutorial/shared-gemini-token-console.webp)

1. 在控制台选择延迟低的“API 请求地址”进行复制。

![GGUU API 控制台中复制 API 请求地址](/images/tutorial/shared-api-request-address-console.webp)

1. CC Switch下滑页面，找到“API Key”和“请求地址”配置项，填入你刚才复制的API Key和 API 请求地址，新手可以参考如图所示配置，再点击右下角“添加”按钮。

![CC-Switch 中填写 Gemini 的 API Key 和请求地址并添加](/images/tutorial/cc-switch-gemini-04-provider-form.webp)

1. 添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成

![CC-Switch 主界面中启用已添加的 Gemini 配置](/images/tutorial/cc-switch-gemini-05-enable-config.webp)

1. 在终端运行 gemini，看到对话界面并能正常回复即表示配置完成

![终端运行 Gemini 并进入可对话界面](/images/tutorial/shared-gemini-terminal-chat.webp)
