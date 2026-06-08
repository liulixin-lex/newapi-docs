---
title: "手动配置 Claude Code"
description: "Windows 与 macOS 下的 Claude Code 配置文件。"
---
# Claude Code配置

## Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开Claude Code配置目录

```bash
%userprofile%\.claude
```

![Windows 运行窗口中输入 .claude 配置目录路径](/images/tutorial/51.png)

1. 目录内容如图所示，如果目录中没有 `settings.json`，你需要手动创建一个 `settings.json` 并打开。

**`settings.json`**：Claude主要的配置文件，主要用来配置中转站地址以及Api Key，以及一些hooks，plugins等

![Windows 的 Claude Code 配置目录和 settings.json 文件](/images/tutorial/52.png)

1. 将以下内容写入 `settings.json`

```json
{  
  "env": {  
    "ANTHROPIC_BASE_URL": "https://api.gguuai.com.com",  
    "ANTHROPIC_AUTH_TOKEN": "xxx",  
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",  
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",  
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1"  
  }  
}
```

![settings.json 中填写 Claude Code 中转地址和 API Key 配置](/images/tutorial/53.png)

1. 回顾 [创建API令牌](/getting-started/api-token.html)，在 GGUU API 中创建 Claude 分组的令牌，替换上方 `xxx` 部分

![GGUU API 控制台中复制 Claude 分组令牌](/images/tutorial/54.png)

1. 在 Windows 终端运行 `claude`，出现对话界面后进行对话测试，能收到回复即表示配置成功

![Windows 终端运行 Claude Code 并测试回复](/images/tutorial/55.png)

## Mac OS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录

```bash
~/.claude
```

![macOS 访达前往文件夹窗口中输入 .claude 配置目录](/images/tutorial/56.png)

1. 若目录不存在 `settings.json`，需要你手动进行创建

**`settings.json`**：Claude主要的配置文件，主要用来配置中转站地址以及ApiKey，以及一些hooks，plugins等

![macOS 的 Claude Code 配置目录和 settings.json 文件](/images/tutorial/57.png)

1. 将以下内容写入 `settings.json`

```json
{  
  "env": {  
    "ANTHROPIC_BASE_URL": "https://api.gguuai.com",  
    "ANTHROPIC_AUTH_TOKEN": "xxx",  
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",  
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",  
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1"  
  }  
}
```

![macOS settings.json 中填写 Claude Code 中转地址和 API Key 配置](/images/tutorial/58.png)

1. 回顾 [创建API令牌](/getting-started/api-token.html)，在 GGUU API 中创建 Claude 分组的令牌，替换上方 `xxx`

![GGUU API 控制台中复制 Claude 分组令牌](/images/tutorial/59.png)

1. 在终端运行 `claude`，看到对话界面并能正常回复即表示配置完成

![macOS 终端运行 Claude Code 并测试回复](/images/tutorial/60.png)
