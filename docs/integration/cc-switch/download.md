---
title: "CC-Switch 软件下载"
description: "Windows、macOS 与 Linux 的 CC-Switch 安装方式。"
---
# 软件下载

## Windows

## 方式一：

1. 点击下载链接→[传送门](https://github.com/farion1231/cc-switch/releases/latest)←，进入CC-Switch的Github Release页面
2. 鼠标滚动到最下方选择适合自己版本的安装包，windows系统推荐下载普通msi后缀的安装包进行安装

![CC-Switch GitHub Releases 页面中的安装包下载列表](/images/tutorial/cc-switch-download-01-github-releases.webp)

1. 安装后运行CC-Switch主程序，界面如下。

![CC-Switch 启动后的主界面](/images/tutorial/cc-switch-download-02-main-ui.webp)

## 方式二：

使用官方 Release 中的 MSI 文件直接安装：

**[CC-Switch-v3.16.1-Windows.msi](https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-Windows.msi)**

## Mac OS

## 方式一：

1. MacOS安装推荐使用HomeBrew
2. 开启终端后，分别运行以下命令：

```bash
# 添加 tap 源  
brew tap farion1231/ccswitch  
# 安装 CC-Switch  
brew install --cask cc-switch
```

1. 安装完成后，在“启动台”或“应用程序”文件夹中找到 CC-Switch 并启动。

![macOS 中安装并启动 CC-Switch 后的界面](/images/tutorial/cc-switch-download-02-main-ui.webp)

## 方式二：

使用官方 Release 中的 DMG 文件直接安装：

**[CC-Switch-v3.16.1-macOS.dmg](https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-macOS.dmg)**

## Linux

::: warning 🔔重要

以下命令使用当前 Release 的文件名示例。请访问 [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest) 页面确认最新版本号，并根据你的系统架构选择 `x86_64` 或 `arm64` 安装包。
:::

Debian/Ubuntu 系统：

```bash
# x86_64 设备下载 .deb 包
wget https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-Linux-x86_64.deb

# arm64 设备下载 .deb 包
wget https://github.com/farion1231/cc-switch/releases/download/v3.16.1/CC-Switch-v3.16.1-Linux-arm64.deb
```

```bash
# 安装 x86_64 包
sudo dpkg -i CC-Switch-v3.16.1-Linux-x86_64.deb

# 安装 arm64 包
sudo dpkg -i CC-Switch-v3.16.1-Linux-arm64.deb
```
