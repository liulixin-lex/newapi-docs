---
title: "手动 CLI 环境检查"
description: "Node.js、npm 与 CLI 安装测试。"
---
# CLI配置教程

::: tip 适合场景
如果你已经熟悉终端和配置文件，可以选择手动 CLI 配置。
:::

## 环境检查(通用步骤)

## （1）确认Node.js环境已安装

1. 在windows或MacOS终端输入以下命令

```text
npm list -g --depth=0
```

正常情况应该是如下图所示（没有任何内容也没关系），如果提示“命令未找到”，则说明你没有安装Node.js，你需要按 [此教程 ](https://www.runoob.com/nodejs/nodejs-install-setup.html)来安装运行Claude Code、Codex、Gemini所需的环境

![终端运行 npm list 命令检查 Node.js 和 npm 环境](/images/tutorial/46.webp)

1. 如果你发现自己没有安装Node.
2. js，并且跟着教程目前已经安装完毕，请你重新执行上述提到的命令，如果不再提示“命令未找到”，则说明安装成功

## （2）安装CLI

在windows或MacOS终端输入以下命令，一次性安装好我们目前所需的所有终端

```bash
npm i -g @anthropic-ai/claude-code@latest  
npm i -g @openai/codex@latest  
npm i -g @google/gemini-cli@latest
```

![终端通过 npm 全局安装 Claude Code、Codex 和 Gemini CLI](/images/tutorial/47.webp)

## （3）测试安装成功

::: warning 🔔重要

这一步很重要，请你务必运行命令进行测试，因为这一步运行命令后，你的用户目录下才会生成各CLI的配置目录，方便后续操作！
:::

**Claude code**

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Claude code安装成功

```bash
claude
```

![终端运行 claude 命令测试 Claude Code 安装结果](/images/tutorial/48.webp)

**Codex**

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Codex安装成功

```text
codex
```

![终端运行 codex 命令测试 Codex 安装结果](/images/tutorial/49.webp)

**Gemini**

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Gemini安装成功

```text
gemini
```

![终端运行 gemini 命令测试 Gemini CLI 安装结果](/images/tutorial/50.webp)
