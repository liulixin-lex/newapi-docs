---
title: "Environment Check"
description: "Confirm that Node.js and npm are available."
---
# Environment Check

Before configuring Claude Code, Codex, or Gemini CLI, first confirm that Node.js is installed correctly on your computer.

## Check the Node.js Environment

Run this command in a Windows, macOS, or Linux terminal:

```text
npm list -g --depth=0
```

If the command runs normally, Node.js and npm are available. It is fine if the output shows no installed global packages.

If you see `command not found` or a similar error, Node.js is not installed yet, or it was not added to the system environment variables correctly after installation. Install Node.js first, then run the command again to confirm.

::: warning Environment Check Required

CLI tools depend on Node.js and npm. If the environment is not ready, installing Claude Code, Codex, or Gemini CLI may fail.
:::

## Continue to CLI Installation

After the environment check passes, continue to [Configure CLI Tools](/en/integration/endpoint.html). For a fuller environment installation guide, you can also read [General CLI Environment Check](/en/integration/manual-cli/environment.html).

