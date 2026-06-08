---
title: "Configure Codex Manually"
description: "Codex configuration files on Windows and macOS."
---
# Codex Setup

## Windows

1. Press `Win + R`, enter the following path, then press Enter to open your Codex configuration directory:

```bash
%userprofile%\.codex
```

![Windows Run dialog with the .codex configuration directory path](/images/tutorial/61.webp)

2. Your directory may contain the files shown below. Only three files are relevant here, and only two of them need configuration.

![Codex configuration directory on Windows showing config.toml, auth.json, and AGENTS.md](/images/tutorial/62.webp)

- **`config.toml`**: Codex's core configuration file. Relay services and MCP settings are configured here.
- **`auth.json`**: used to configure the API key you obtained from the relay service.
- **`AGENTS.md`**: used to set Codex's global working prompt.

::: warning Important

Many users may not have these three files right after installation. You need to create the three files manually and write the content into them.
:::

3. Configure `config.toml`.

Copy the following configuration into your `config.toml` file and save it:

```toml
disable_response_storage = true
model = "gpt-5.5"
model_provider = "gguuai"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.gguuai]
base_url = "https://api.gguuai.com/v1"
name = "gguuai"
requires_openai_auth = true
wire_api = "responses"
```

4. Configure the API key.

Copy the following configuration into your `auth.json` file:

```json
{  "OPENAI_API_KEY": "xxx"}
```

![Windows auth.json with OPENAI_API_KEY for Codex](/images/tutorial/63.webp)

Review [Create an API Token](/en/getting-started/api-token.html). Create a token in the Codex group in GGUU API, click the copy button on the right, then replace `xxx` with the key and save.

![Copying a Codex group token in the GGUU API console](/images/tutorial/64.webp)

5. Test the conversation.

Run this command in Windows Terminal. If the interface shown in the screenshot appears, start a conversation test. If you receive a reply, setup succeeded and you can start using Codex.

```bash
codex
```

![Windows terminal running Codex and testing a response](/images/tutorial/65.webp)

## macOS

1. In Finder, press `Command + Shift + G`, enter the following path, then press Enter to open the Codex configuration directory:

```bash
~/.codex
```

![macOS Go to Folder dialog with the .codex configuration directory path](/images/tutorial/66.webp)

2. Your directory may contain the files shown below. Only three files are relevant here, and only two of them need configuration. Other files can be ignored.

![Codex configuration directory on macOS showing config.toml, auth.json, and AGENTS.md](/images/tutorial/67.webp)

- **`config.toml`**: Codex's core configuration file. Relay services and MCP settings are configured here.
- **`auth.json`**: stores the API key obtained from the relay service.
- **`AGENTS.md`**: Codex's global working prompt.

::: warning Important

If these files are not generated automatically after first installation, create them manually and write the content into them.
:::

3. Configure `config.toml`.

Save the following content to `config.toml`:

```toml
disable_response_storage = true
model = "gpt-5.5"
model_provider = "gguuai"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.gguuai]
base_url = "https://api.gguuai.com/v1"
name = "gguuai"
requires_openai_auth = true
wire_api = "responses"
```

4. Configure the API key.

Copy the following configuration into your `auth.json` file:

```json
{  "OPENAI_API_KEY": "xxx"}
```

![macOS auth.json with OPENAI_API_KEY for Codex](/images/tutorial/68.webp)

Review [Create an API Token](/en/getting-started/api-token.html). Create a token in the Codex group in GGUU API, click the copy button on the right, then replace `xxx` with the key and save.

![Copying a Codex group token in the GGUU API console](/images/tutorial/69.webp)

5. Test the conversation.

Run this command in macOS Terminal. If the chat interface appears and replies normally, setup succeeded.

```bash
codex
```

![macOS terminal running Codex and testing a response](/images/tutorial/70.webp)

