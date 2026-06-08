---
title: "Configure Claude Code Manually"
description: "Claude Code configuration files on Windows and macOS."
---
# Claude Code Setup

## Windows

1. Press `Win + R`, enter the following path, then press Enter to open the Claude Code configuration directory:

```bash
%userprofile%\.claude
```

![Windows Run dialog with the .claude configuration directory path](/images/tutorial/51.png)

2. The directory should look like the screenshot. If there is no `settings.json` in the directory, manually create a `settings.json` file and open it.

**`settings.json`**: Claude's main configuration file. It is mainly used to configure the relay address, API key, and items such as hooks and plugins.

![Claude Code configuration directory on Windows with the settings.json file](/images/tutorial/52.png)

3. Write the following content into `settings.json`:

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

![settings.json with Claude Code relay endpoint and API key configuration](/images/tutorial/53.png)

4. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Claude group in GGUU API, and replace the `xxx` part above.

![Copying a Claude group token in the GGUU API console](/images/tutorial/54.png)

5. Run `claude` in Windows Terminal. After the chat interface appears, test a conversation. If you receive a reply, setup succeeded.

![Windows terminal running Claude Code and testing a response](/images/tutorial/55.png)

## macOS

1. In Finder, press `Command + Shift + G`, enter the following path, then press Enter to open the configuration directory:

```bash
~/.claude
```

![macOS Go to Folder dialog with the .claude configuration directory path](/images/tutorial/56.png)

2. If there is no `settings.json` in the directory, create it manually.

**`settings.json`**: Claude's main configuration file. It is mainly used to configure the relay address, API key, and items such as hooks and plugins.

![Claude Code configuration directory on macOS with the settings.json file](/images/tutorial/57.png)

3. Write the following content into `settings.json`:

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

![macOS settings.json with Claude Code relay endpoint and API key configuration](/images/tutorial/58.png)

4. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Claude group in GGUU API, and replace `xxx`.

![Copying a Claude group token in the GGUU API console](/images/tutorial/59.png)

5. Run `claude` in Terminal. If the chat interface appears and replies normally, setup is complete.

![macOS terminal running Claude Code and testing a response](/images/tutorial/60.png)

