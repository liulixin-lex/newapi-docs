---
title: "手动配置 Gemini"
description: "Windows 与 macOS 下的 Gemini CLI 配置文件。"
---
# Gemini配置

## Windows

1. 键盘按下“Win+R”，输入以下内容后回车，打开 Gemini CLI 配置目录

```bash
%userprofile%\.gemini
```

![Windows 运行窗口中输入 .gemini 配置目录路径](/images/tutorial/manual-gemini-01-windows-run-path.webp)

1. 如果目录下没有 `.env` 文件，请新建一个 `.env`，写入以下内容

**`.env`**：Gemini CLI的配置文件，主要设置自定义端点、ApiKey跟所用模型

![Windows 的 Gemini CLI 配置目录中创建 .env 文件](/images/tutorial/manual-gemini-02-windows-env-file.webp)

```bash
GOOGLE_GEMINI_BASE_URL=https://api.gguuai.com  
GEMINI_API_KEY=xxx  
GEMINI_MODEL=gemini-3.1-pro
```

![Gemini .env 文件中填写中转地址、API Key 和模型名](/images/tutorial/manual-gemini-03-env-settings.webp)

1. 回顾 [创建API令牌](/getting-started/api-token.html)，在 GGUU API 中创建 Gemini 分组令牌，并复制 API Key 后填入 `xxx`

![GGUU API 控制台中复制 Gemini 分组令牌](/images/tutorial/shared-gemini-token-console.webp)

1. 打开终端执行 `gemini`，看到交互界面并能正常回复即表示配置成功

![Windows 终端运行 Gemini 并测试回复](/images/tutorial/shared-gemini-terminal-chat.webp)

## Mac OS

1. 按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录

```bash
~/.gemini
```

![macOS 访达前往文件夹窗口中输入 .gemini 配置目录](/images/tutorial/manual-gemini-04-macos-folder-path.webp)

1. 若目录中没有 `.env` 文件，创建并写入以下内容

**`.env`**：Gemini CLI的配置文件，主要设置自定义端点、ApiKey跟所用模型

![macOS 的 Gemini CLI 配置目录中创建 .env 文件](/images/tutorial/manual-gemini-05-macos-env-file.webp)

```bash
GOOGLE_GEMINI_BASE_URL=https://api.gguuai.com  
GEMINI_API_KEY=xxx  
GEMINI_MODEL=gemini-3.1-pro
```

1. 回顾 [创建API令牌](/getting-started/api-token.html)，在 GGUU API 中创建 Gemini 分组令牌，填入 `xxx`

![GGUU API 控制台中复制 Gemini 分组令牌](/images/tutorial/shared-gemini-token-console.webp)

1. 在终端运行 `gemini`，可正常进入对话并收到回复即表示配置完成

![macOS 终端运行 Gemini 并测试回复](/images/tutorial/shared-gemini-terminal-chat.webp)
