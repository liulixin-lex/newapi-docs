---
title: "OpenCode Setup"
description: "Install OpenCode and add the GGUUAI channel through CC-Switch."
---
# OpenCode

**An open-source AI coding assistant that helps write, debug, and improve code in a terminal, IDE, or desktop environment.**

## Global Installation

1. Open your terminal and run this command to install OpenCode globally:

```bash
npm install -g opencode-ai
```

2. After installation, enter `opencode` in the terminal. If the interface appears, installation succeeded.

![Terminal running opencode and opening the OpenCode interface](/images/tutorial/opencode-01-terminal-open.webp)

3. Read [Download CC-Switch](/en/integration/cc-switch/download.html), download and install CC-Switch locally, then open the software.
4. Select `OpenCode` in the top configuration area, then click `Add provider`.

![CC-Switch OpenCode group with the Add provider button](/images/tutorial/opencode-02-add-provider.webp)

5. Choose `Custom configuration`.

![Selecting custom configuration for the OpenCode provider](/images/tutorial/opencode-03-custom-provider.webp)

6. Add the configuration items.

- In `Provider ID`, enter a group name, such as `codex`.
- In `Interface format`, choose the protocol that matches the model.
- Claude models: `Anthropic`
- Codex models: `OpenAI Responses` or `OpenAI Compatible`
- Gemini models: `Google (Gemini)`

![OpenCode custom provider form with provider identifier and interface format](/images/tutorial/opencode-04-provider-id.webp)

- In `API Key`, enter the key you created in [Create an API Token](/en/getting-started/api-token.html).
- In `Extra options`, configure the key-value pair `{"setCacheKey":true}`.

7. After all items are configured, click `Add` in the lower-right corner.

**Reference configuration**

![OpenCode reference configuration with API key and extra options](/images/tutorial/opencode-05-reference-config.webp)

8. Select the PackyApi channel you just configured in the interface, then click the add button.

![Selecting the configured GGUUAI channel in OpenCode and adding it](/images/tutorial/opencode-06-add-channel.webp)

## Verify the Configuration

1. Reopen the terminal and enter `opencode` to run it.
2. Enter the `/models` command and check whether the GGUUAI channel you just configured exists. If it exists, setup succeeded and you can use it directly.

![OpenCode /models output showing the configured GGUUAI channel](/images/tutorial/opencode-07-models-output.webp)

