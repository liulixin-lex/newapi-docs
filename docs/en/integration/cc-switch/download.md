---
title: "Download CC-Switch"
description: "How to install CC-Switch on Windows, macOS, and Linux."
---
# Software Download

## Windows

## Method 1

1. Click the download link, [download portal](https://github.com/farion1231/cc-switch/releases/latest), to open the CC-Switch GitHub Releases page.
2. Scroll to the bottom and choose the installer package that matches your system. On Windows, the regular `.msi` installer is recommended.

![CC-Switch GitHub Releases page showing downloadable installers](/images/tutorial/cc-switch-download-01-github-releases.webp)

3. After installation, run the CC-Switch main program. The interface looks like this.

![CC-Switch main interface after launch](/images/tutorial/cc-switch-download-02-main-ui.webp)

## Method 2

Install directly with the MSI file from the official release:

**[CC-Switch-v3.16.1-Windows.msi](https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-Windows.msi)**

## macOS

## Method 1

1. On macOS, Homebrew installation is recommended.
2. Open Terminal and run these commands:

```bash
# Add the tap source
brew tap farion1231/ccswitch
# Install CC-Switch
brew install --cask cc-switch
```

3. After installation, find CC-Switch in `Launchpad` or the `Applications` folder and start it.

![CC-Switch interface after installing and launching it on macOS](/images/tutorial/cc-switch-download-02-main-ui.webp)

## Method 2

Install directly with the DMG file from the official release:

**[CC-Switch-v3.16.1-macOS.dmg](https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-macOS.dmg)**

## Linux

::: warning Important

The commands below use the current Release file names as examples. Open the [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest) page to confirm the latest version, then choose the `x86_64` or `arm64` package for your system.
:::

Debian/Ubuntu:

```bash
# Download the .deb package for x86_64 devices
wget https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-Linux-x86_64.deb

# Download the .deb package for arm64 devices
wget https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-Linux-arm64.deb
```

```bash
# Install the x86_64 package
sudo dpkg -i CC-Switch-v3.16.1-Linux-x86_64.deb

# Install the arm64 package
sudo dpkg -i CC-Switch-v3.16.1-Linux-arm64.deb
```

