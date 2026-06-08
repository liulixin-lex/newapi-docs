---
title: "Manual CLI Environment Check"
description: "Node.js, npm, and CLI installation tests."
---
# CLI Setup Guide

::: tip Suitable Scenario
If you are already familiar with terminals and configuration files, you can choose manual CLI setup.
:::

## Environment Check (General Steps)

## (1) Confirm That Node.js Is Installed

1. In a Windows or macOS terminal, run this command:

```text
npm list -g --depth=0
```

Normally, the output should look like the screenshot below. It is also fine if it shows no content. If you see `command not found`, Node.js is not installed. Follow [this tutorial](https://www.runoob.com/nodejs/nodejs-install-setup.html) to install the environment required for Claude Code, Codex, and Gemini.

![Terminal running npm list to check the Node.js and npm environment](/images/tutorial/46.png)

2. If Node.js was not installed and you have now completed installation, run the command above again. If it no longer shows `command not found`, installation succeeded.

## (2) Install CLI

In a Windows or macOS terminal, run these commands to install all required terminals at once:

```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
npm i -g @google/gemini-cli@latest
```

![Terminal installing Claude Code, Codex, and Gemini CLI globally with npm](/images/tutorial/47.png)

## (3) Test That Installation Succeeded

::: warning Important

This step is important. Make sure you run the commands for testing, because after this step each CLI will create its configuration directory under your user directory, which makes the later setup easier.
:::

**Claude Code**

In a Windows or macOS terminal, run this command. If the screenshot content appears, or if options appear for you to choose from, Claude Code was installed successfully.

```bash
claude
```

![Terminal running claude to test the Claude Code installation](/images/tutorial/48.png)

**Codex**

In a Windows or macOS terminal, run this command. If the screenshot content appears, or if options appear for you to choose from, Codex was installed successfully.

```text
codex
```

![Terminal running codex to test the Codex installation](/images/tutorial/49.png)

**Gemini**

In a Windows or macOS terminal, run this command. If the screenshot content appears, or if options appear for you to choose from, Gemini was installed successfully.

```text
gemini
```

![Terminal running gemini to test the Gemini CLI installation](/images/tutorial/50.png)

