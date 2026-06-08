---
title: "Configure Gemini Manually"
description: "Gemini CLI configuration files on Windows and macOS."
---
# Gemini Setup

## Windows

1. Press `Win + R`, enter the following path, then press Enter to open the Gemini CLI configuration directory:

```bash
%userprofile%\.gemini
```

![Windows Run dialog with the .gemini configuration directory path](/images/tutorial/manual-gemini-01-windows-run-path.webp)

2. If there is no `.env` file in the directory, create a new `.env` file and write the following content into it.

**`.env`**: Gemini CLI's configuration file. It mainly sets the custom endpoint, API key, and model to use.

![Gemini CLI configuration directory on Windows with a new .env file](/images/tutorial/manual-gemini-02-windows-env-file.webp)

```bash
GOOGLE_GEMINI_BASE_URL=https://api.gguuai.com
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-3.1-pro
```

![Gemini .env file with relay endpoint, API key, and model name](/images/tutorial/manual-gemini-03-env-settings.webp)

3. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Gemini group in GGUU API, copy the API key, then fill it into `xxx`.

![Copying a Gemini group token in the GGUU API console](/images/tutorial/shared-gemini-token-console.webp)

4. Open a terminal and run `gemini`. If the interactive interface appears and replies normally, setup succeeded.

![Windows terminal running Gemini and testing a response](/images/tutorial/shared-gemini-terminal-chat.webp)

## macOS

1. Press `Command + Shift + G`, enter the following path, then press Enter to open the configuration directory:

```bash
~/.gemini
```

![macOS Go to Folder dialog with the .gemini configuration directory path](/images/tutorial/manual-gemini-04-macos-folder-path.webp)

2. If there is no `.env` file in the directory, create one and write the following content into it.

**`.env`**: Gemini CLI's configuration file. It mainly sets the custom endpoint, API key, and model to use.

![Gemini CLI configuration directory on macOS with a new .env file](/images/tutorial/manual-gemini-05-macos-env-file.webp)

```bash
GOOGLE_GEMINI_BASE_URL=https://api.gguuai.com
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-3.1-pro
```

3. Review [Create an API Token](/en/getting-started/api-token.html), create a token in the Gemini group in GGUU API, then fill the key into `xxx`.

![Copying a Gemini group token in the GGUU API console](/images/tutorial/shared-gemini-token-console.webp)

4. Run `gemini` in Terminal. If you can enter the chat and receive replies normally, setup is complete.

![macOS terminal running Gemini and testing a response](/images/tutorial/shared-gemini-terminal-chat.webp)

