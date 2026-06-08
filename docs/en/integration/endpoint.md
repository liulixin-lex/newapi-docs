---
title: "Configure CLI Tools"
description: "Prerequisites, primary endpoint, optimized endpoint, and the OpenAI-compatible /v1 rule."
---
# Configure CLI Tools

## Prerequisites

Before configuring any CLI tool, complete these steps first:

1. Complete the [Environment Check](/en/getting-started/environment.html) and make sure Node.js and npm can be used normally.
2. Complete [CLI Installation](/en/integration/manual-cli/environment.html#_2-install-cli) to install Claude Code, Codex, and Gemini CLI.

## API Endpoint Notes

After signing in to the console, you can view the currently available API information in the lower-left corner of the `Dashboard`.

![Dashboard API section showing the primary and optimized API request addresses](/images/tutorial/api-endpoint-01-api-addresses.webp)

Primary Endpoint: `https://api.gguuai.com`. This is recommended first and is suitable for daily use cases that need better stability.

Optimized Endpoint: `https://api.minimax.love`. This optimized route is suitable for latency-sensitive scenarios.

::: warning Add /v1 for OpenAI-compatible Endpoints

If you use an OpenAI-compatible client or tool, such as `Codex`, the `OpenAI SDK`, or Cherry Studio's OpenAI-compatible configuration, add `/v1` after the API address:

```text
https://api.gguuai.com/v1
https://api.minimax.love/v1
```

If you use a dedicated configuration such as `Claude Code` or `Gemini CLI`, follow the examples in the corresponding guide.
:::

::: tip Recommended Setup

To make the setup process as simple as possible, we strongly recommend using the GitHub open-source project CC-Switch to configure your local environment.

[CC-Switch guide for Claude Code, Codex, and Gemini](/en/integration/cc-switch/index.html)
:::

::: info Alternative

If you do not want to use CC-Switch, you can use the general manual setup:

[Claude Code setup guide](/en/integration/manual-cli/claude-code.html)

[Codex setup guide](/en/integration/manual-cli/codex.html)

[Gemini setup guide](/en/integration/manual-cli/gemini.html)
:::

::: warning Note
Whichever CLI you use, make sure you complete the prerequisites above first so that Node.js, npm, and the corresponding CLI all work normally.
:::

