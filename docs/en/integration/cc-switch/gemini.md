---
title: "Configure Gemini with CC-Switch"
description: "Configure the Gemini group, API key, and request address in CC-Switch."
---
# Gemini Setup

1. Open the CC-Switch software you downloaded. You will see the initial interface shown below.

![CC-Switch initial interface for starting Gemini setup](/images/tutorial/cc-switch-gemini-01-start-screen.webp)

2. In the group bar, switch the group to `Gemini`.

![Gemini group selected in the CC-Switch group bar](/images/tutorial/cc-switch-gemini-02-select-group.webp)

3. In the provider group, choose `Custom configuration` as shown.

![Custom configuration provider selected for the Gemini group](/images/tutorial/cc-switch-gemini-03-custom-provider.webp)

4. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Gemini group in GGUU API, click the copy button, and copy the API key to your clipboard.

![Copying the Gemini group API key in the GGUU API console](/images/tutorial/shared-gemini-token-console.webp)

5. In the console, choose a low-latency `API request address` and copy it.

![Copying an API request address in the GGUU API console](/images/tutorial/shared-api-request-address-console.webp)

6. Scroll down in CC-Switch, find the `API Key` and `Request address` fields, and enter the API key and API request address you copied. Beginners can use the screenshot as a reference, then click `Add` in the lower-right corner.

![Entering the Gemini API key and request address in CC-Switch and adding the provider](/images/tutorial/cc-switch-gemini-04-provider-form.webp)

7. After it is added successfully, you will see the configured group on the main screen. Click `Enable` on the right. When it shows `In use`, setup is complete.

![Enabling the added Gemini configuration in the CC-Switch main interface](/images/tutorial/cc-switch-gemini-05-enable-config.webp)

8. Run `gemini` in a terminal. If the chat interface appears and replies normally, the configuration is complete.

![Terminal running Gemini and opening the chat interface](/images/tutorial/shared-gemini-terminal-chat.webp)

