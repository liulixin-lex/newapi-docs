---
title: "手动配置 Codex"
description: "Windows 与 macOS 下的 Codex 配置文件。"
---
# Codex配置

## Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开你的codex配置目录

```bash
%userprofile%\.codex
```

![Windows 运行窗口中输入 .codex 配置目录路径](/images/tutorial/61.webp)

1. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个

![Windows 的 Codex 配置目录，显示 config.toml、auth.json 和 AGENTS.md](/images/tutorial/62.webp)

- **`config.toml`**：Codex的核心配置文件，中转服务与MCP等都在此文件配置
- **`auth.json`**：用来配置你在中转站获取的API Key
- **`AGENTS.md`**：用来设置codex全局工作的提示词

::: warning ❗️重要

很多人刚安装可能没有这三个文件，你需要手动去创建这三个文件，然后写入内容
:::

1. 配置 Config.toml

将以下配置文本复制到你的 `config.toml` 文件中保存

```toml
disable_response_storage = true  
model = "gpt-5.5"  
model_provider = "gguuai"  
model_reasoning_effort = "xhigh"  
model_verbosity = "high"  

[features]  
web_search_request = true  

[model_providers.gguuai]  
base_url = "https://api.gguuai.com/v1"  
name = "gguuai"  
requires_openai_auth = true  
wire_api = "responses"
```

1. 配置API key

将以下配置文本复制到你的 `auth.json` 文件中

```json
{  "OPENAI_API_KEY": "xxx"}
```

![Windows auth.json 中填写 Codex 使用的 OPENAI_API_KEY](/images/tutorial/63.webp)

回顾 [创建API令牌](/getting-started/api-token.html) 这一步教程，我们需要在GGUU API 中创建 Codex 分组的令牌，然后点击右侧的复制按钮，将 Key 填入 `xxx` 部分后保存

![GGUU API 控制台中复制 Codex 分组令牌](/images/tutorial/64.webp)

1. 测试对话

在windows终端输入以下命令，出现图示内容，进行对话测试，如果有回复，则配置成功，开始你的Codex使用之旅~

```bash
codex
```

![Windows 终端运行 Codex 并测试回复](/images/tutorial/65.webp)

## Mac OS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开 Codex 配置目录

```bash
~/.codex
```

![macOS 访达前往文件夹窗口中输入 .codex 配置目录](/images/tutorial/66.webp)

1. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个，其它文件可忽略

![macOS 的 Codex 配置目录，显示 config.toml、auth.json 和 AGENTS.md](/images/tutorial/67.webp)

- **`config.toml`**：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置
- **`auth.json`**：存放中转站获取的 API Key
- **`AGENTS.md`**：Codex 全局工作的提示词

::: warning ❗️重要

初次安装若未自动生成，需要手动创建上述三个文件并写入内容
:::

1. 配置 Config.toml

将以下内容保存到 `config.toml`

```toml
disable_response_storage = true  
model = "gpt-5.5"  
model_provider = "gguuai"  
model_reasoning_effort = "xhigh"  
model_verbosity = "high"  

[features]  
web_search_request = true  

[model_providers.gguuai]  
base_url = "https://api.gguuai.com/v1"  
name = "gguuai"  
requires_openai_auth = true  
wire_api = "responses"
```

1. 配置 API key

将以下配置文本复制到你的 `auth.json` 文件中

```json
{  "OPENAI_API_KEY": "xxx"}
```

![macOS auth.json 中填写 Codex 使用的 OPENAI_API_KEY](/images/tutorial/68.webp)

回顾 [创建API令牌](/getting-started/api-token.html) 这一步教程，我们需要在GGUU API中创建 Codex 分组的令牌，然后点击右侧的复制按钮，将 Key 填入 `xxx` 部分后保存

![GGUU API 控制台中复制 Codex 分组令牌](/images/tutorial/69.webp)

1. 测试对话

在 MacOS 终端执行以下命令，出现对话界面并能收到回复即表示配置成功

```bash
codex
```

![macOS 终端运行 Codex 并测试回复](/images/tutorial/70.webp)
