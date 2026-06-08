---
title: "Configure Claude Code with CC-Switch"
description: "Configure the Claude group, API key, and request address in CC-Switch."
---
# Claude Code Setup

1. Open the CC-Switch software you downloaded. You will see the initial interface shown below.

![CC-Switch initial interface for starting Claude Code setup](/images/tutorial/21.webp)

2. In the group bar, switch the group to `Claude`.

![Claude group selected in the CC-Switch group bar](/images/tutorial/22.webp)

3. In the provider group, choose `Custom configuration` as shown.

![Custom configuration provider selected for the Claude group](/images/tutorial/23.webp)

4. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Claude group in GGUU API, click the copy button, and copy the API key to your clipboard.

![Copying the Claude group API key in the GGUU API console](/images/tutorial/24.webp)

5. In the console, choose a low-latency `API request address` and copy it.

![Copying an API request address in the GGUU API console](/images/tutorial/25.webp)

6. Scroll down in CC-Switch, find the `API Key` and `Request address` fields, and enter the API key and API request address you copied. Beginners can use the screenshot as a reference, then click `Add` in the lower-right corner.

![Entering the Claude API key and request address in CC-Switch and adding the provider](/images/tutorial/26.webp)

7. After it is added successfully, you will see the configured group on the main screen. Click `Enable` on the right. When it shows `In use`, setup is complete.

![Enabling the added Claude configuration in the CC-Switch main interface](/images/tutorial/27.webp)

8. Click `Settings` in the upper-left corner. On the General page, scroll down and find `Skip Claude Code first-install confirmation`. **Make sure this option is checked.**

![CC-Switch settings with Skip Claude Code initial install confirmation enabled](/images/tutorial/28.webp)

9. Run `claude` in a terminal. If the chat interface appears and replies normally, the configuration is complete.

![Terminal running Claude Code and opening the chat interface](/images/tutorial/29.webp)

