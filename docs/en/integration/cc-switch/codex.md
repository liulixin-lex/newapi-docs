---
title: "Configure Codex with CC-Switch"
description: "Configure the Codex group and OpenAI-compatible endpoint in CC-Switch."
---
# Codex Setup

1. Open the CC-Switch software you downloaded. You will see the initial interface shown below.

![CC-Switch initial interface for starting Codex setup](/images/tutorial/30.png)

2. In the group bar, switch the group to `Codex`.

![Codex group selected in the CC-Switch group bar](/images/tutorial/31.png)

3. In the provider group, choose `GGUUAI` as shown.

![GGUUAI provider selected for the Codex group](/images/tutorial/32.png)

4. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Codex group in GGUU API, click the copy button, and copy the API key to your clipboard.

![Copying the Codex group API key in the GGUU API console](/images/tutorial/33.png)

5. In the console, choose a low-latency `API request address` and copy it.

![Copying an API request address in the GGUU API console](/images/tutorial/34.png)

6. Scroll down in CC-Switch, find the `API Key` and `Request address` fields, and enter the API key and API request address you copied. Beginners can use the screenshot as a reference, then click `Add` in the lower-right corner.

::: warning Note

If you use an OpenAI-compatible client or tool, such as Codex, the OpenAI SDK, or Cherry Studio's OpenAI-compatible configuration, add `/v1` after the API address.
:::

![Entering the Codex API key and request address with /v1 in CC-Switch](/images/tutorial/35.png)

7. After it is added successfully, you will see the configured group on the main screen. Click `Enable` on the right. When it shows `In use`, setup is complete.

![Enabling the added Codex configuration in the CC-Switch main interface](/images/tutorial/36.png)

8. Run `codex` in a terminal. If the chat interface appears and replies normally, the configuration is complete.

![Terminal running Codex and opening the chat interface](/images/tutorial/37.png)

