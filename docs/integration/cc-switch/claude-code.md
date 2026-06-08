---
title: "用 CC-Switch 配置 Claude Code"
description: "在 CC-Switch 中配置 Claude 分组、API Key 和请求地址。"
---
# Claude Code配置

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![CC-Switch 初始界面，用于开始配置 Claude Code](/images/tutorial/21.png)

1. 在分组条中，将分组选择至“Claude”

![CC-Switch 分组栏中选择 Claude 分组](/images/tutorial/22.png)

1. 在供应商分组中，选择如图的“自定义配置”

![Claude 分组中选择自定义配置供应商](/images/tutorial/23.png)

1. 回顾 [创建API令牌](/getting-started/api-token.html)，在 GGUU API 中创建 CC 分组的令牌，点击复制按钮，复制API Key到剪切板

![GGUU API 控制台中复制 Claude 分组 API Key](/images/tutorial/24.png)

1. 在控制台选择延迟低的“API 请求地址”进行复制。

![GGUU API 控制台中复制 API 请求地址](/images/tutorial/25.png)

1. CC Switch下滑页面，找到“API Key”和“请求地址”配置项，填入你刚才复制的API Key和 API 请求地址，新手可以参考如图所示配置，再点击右下角“添加”按钮

![CC-Switch 中填写 Claude 的 API Key 和请求地址并添加](/images/tutorial/26.png)

1. 添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成

![CC-Switch 主界面中启用已添加的 Claude 配置](/images/tutorial/27.png)

1. 点击左上角“设置”按钮，在通用页面下拉找到 跳过 Claude Code初次安装确认 ，**务必勾选！**

![CC-Switch 设置页中勾选跳过 Claude Code 初次安装确认](/images/tutorial/28.png)

1. 在终端运行 claude，看到对话界面并能正常回复即表示配置完成

![终端运行 Claude Code 并进入可对话界面](/images/tutorial/29.png)
