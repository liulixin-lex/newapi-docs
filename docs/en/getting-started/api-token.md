---
title: "Create an API Token"
description: "Create an API key, choose a token group, and view the models available in each group."
---
# Create an API Token

::: tip Entry Point
After signing in, open the console and choose `API Keys` from the left sidebar.
:::

## 1. Open Token Management

Click `API Keys` in the left sidebar.

![API Keys entry in the left sidebar of the console](/images/tutorial/api-token-01-api-keys-menu.webp)

Click `Create API Key` at the top of the page.

## 2. Create a New Token

Fill in the token information in the pop-up window:

![Create API key dialog with name, group, expiration, and quota settings](/images/tutorial/api-token-02-create-key-dialog.webp)

- Token name: used to distinguish different purposes, such as `Claude Code`, `Codex`, or `Gemini`.
- Token group: required. The group determines which models this token can use.
- Expiration time: defaults to `Never expire`, but you can set a validity period if needed.
- Quantity: usually keep this as `1`.
- Credit limit: when `Unlimited credit` is enabled, the token's actual available usage is still limited by your account balance.
- Access restrictions: if you are not familiar with these options, keep the default settings first and do not enable model restrictions or the IP allowlist.

::: warning Choose the Correct Token Group

The token group determines which models this API key can call. For `Claude Code`, choose the Claude group. For `Codex`, choose the Codex group. For `Gemini CLI`, choose the Gemini group.

If you choose the wrong group, you may see problems such as `model does not exist` or failed calls when configuring the CLI later.

If you are not sure which group fits each scenario, read [GGUU API Model Groups](/en/models/groups.html) first.
:::

After filling in the form, click `Save changes` in the lower-right corner to finish creating the token.

## View Models Available in Each Group

You can open `Model Marketplace` to check which models are supported under each token group.

![Model Marketplace page for choosing a token group and viewing available models](/images/tutorial/api-token-03-token-group-models.webp)

1. Click `Model Marketplace` at the top of the page.
2. Select a group on the left.
3. The page shows the available models, prices, and group multipliers for that group.
4. Click `Details` to view the exact group and related information for a model.

![Model details page showing group membership and multiplier information](/images/tutorial/api-token-04-model-details.webp)

