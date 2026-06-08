---
title: "GPT-Image-2 配置教程"
description: "使用 gpt-image-2 进行文生图、图片编辑，并在 Cherry Studio 中配置图像生成模型。"
---
# GPT-Image-2 配置教程

OpenAI 图片相关能力分为 Responses API、Images API、Chat Completions API 三类。GGUUAI 的 `gpt-image-2` 支持 Images API。

**Images API** 是 `gpt-image-2` 的推荐出图方式，分为文生图和图片编辑两个接口：

- 文生图：`POST {{API_V1_BASE_URL}}/images/generations`
- 图片编辑 / 图生图：`POST {{API_V1_BASE_URL}}/images/edits`

每个接口下面都按“接口实例 → 参数介绍”的格式说明。对新手来说，只要先照着示例传 `model`、`prompt`，并把 `n` 设为 `1`；需要上传图片时再使用 `image` 字段即可。

## 文生图：/v1/images/generations

### 接口示例

```bash
curl --location '{{API_V1_BASE_URL}}/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 你的生图分组令牌' \
--header 'Accept: */*' \
--header 'Host: {{API_HOST}}' \
--header 'Connection: keep-alive' \
--data '{
    "model": "gpt-image-2",
    "prompt": "一只戴墨镜的橘猫，赛博朋克风格",
    "size": "1024x1024",
    "quality": "high",
    "output_format": "png",
    "response_format": "url",
    "n": 1
}'
```

### 文生图参数

| 参数 | 类型 | 支持情况 | 说明 |
| --- | --- | --- | --- |
| `model` | string | 支持 | 固定填写 `gpt-image-2`。 |
| `prompt` | string | 支持 | 图片描述提示词，建议写清楚主体、场景、风格、比例和文字内容。 |
| `n` | integer | 仅支持 1 | 只支持一次返回 1 张图。这类多图数量不支持。 |
| `size` | string | 支持 | 支持 `auto` 和符合限制的尺寸，如 `1024x1024`、`1536x1024`、`1024x1536`、`1536x864`、`3840x2160`。 |
| `quality` | string | 支持 | 可选 `low`、`medium`、`high`、`auto`。草稿图可以用 `low`，正式出图可以用 `high`。 |
| `response_format` | string | 支持 | 可选 `url`、`b64_json`。默认建议用 `url`；`b64_json` 适合程序自行保存图片。 |
| `output_format` | string | 部分支持 | 推荐 `png` 或 `jpeg`。 |
| `output_compression` | integer | 支持 | 只建议在 `output_format` 为 `jpeg` 时使用，取值 `0` 到 `100`。 |
| `background` | string | 部分支持 | 建议使用默认值或 `opaque`。 |
| `moderation` | string | 支持 | 可选 `auto`、`low`。这是安全审核参数，不会直接改变画面风格；不确定时保持默认即可。 |
| `user` | string | 支持 | 可选，用于标记你自己的终端用户或业务来源，普通调用可以不传。 |

## 图片编辑 / 图生图：/v1/images/edits

`/v1/images/edits` 使用 `multipart/form-data` 上传图片。`image` 是二进制图片文件，`prompt` 写清楚希望怎么修改图片。

### 接口实例

```bash
curl --location '{{API_V1_BASE_URL}}/images/edits' \
--header 'Authorization: Bearer 你的生图分组令牌' \
--header 'Accept: */*' \
--form 'model="gpt-image-2"' \
--form 'prompt="把图中的墨镜去掉，并给橘猫带上帽子"' \
--form 'image=@"/path/to/your-image.jpg"' \
--form 'size="1024x1024"' \
--form 'quality="high"' \
--form 'output_format="png"' \
--form 'response_format="url"'
```

### 图片编辑参数

| 参数 | 类型 | 支持情况 | 说明 |
| --- | --- | --- | --- |
| `model` | string | 支持 | 固定填写 `gpt-image-2`。 |
| `prompt` | string | 支持 | 写清楚要保留什么、修改什么、最终希望得到什么。 |
| `image` | file | 支持 | 必填，上传要编辑的图片二进制文件。建议一次只上传 1 张图片。 |
| `mask` | file | 支持 | 可选，局部修改时可传 PNG mask；不传则按整图编辑理解。 |
| `n` | integer | 仅支持 1 | 只支持一次返回 1 张图。 |
| `size` | string | 支持 | 同文生图，支持 `auto` 和符合限制的尺寸。 |
| `quality` | string | 支持 | 可选 `low`、`medium`、`high`、`auto`。 |
| `response_format` | string | 支持 | 可选 `url`、`b64_json`。默认建议用 `url`。 |
| `output_format` | string | 部分支持 | 推荐 `png` 或 `jpeg`。 |
| `output_compression` | integer | 支持 | 只建议在 `output_format` 为 `jpeg` 时使用，取值 `0` 到 `100`。 |
| `background` | string | 部分支持 | 建议使用默认值或 `opaque`。 |
| `moderation` | string | 支持 | 可选 `auto`、`low`。这是安全审核参数，不会直接改变画面风格。 |
| `input_fidelity` | string | 支持 | 图片编辑时可传 `high`，用于尽量保留原图主体和细节。 |
| `user` | string | 支持 | 可选，普通调用可以不传。 |
| `stream` | boolean | 不支持 | 请不要开启。 |
| `partial_images` | integer | 不支持 | 依赖 `stream` 的中间图返回能力，不支持。 |

## 通用说明

### 尺寸与质量

#### 常用尺寸（Popular sizes）

- `1024 x 1024`：正方形
- `1536 x 1024`：横向
- `1024 x 1536`：纵向
- `2048 x 2048`：2K 正方形
- `2048 x 1152`：2K 横向
- `3840 x 2160`：4K 横向
- `2160 x 3840`：4K 纵向
- `auto`：自动（默认）

#### 尺寸限制（Size constraints）

- 最大边长必须小于或等于 `3840` 像素。
- 宽和高都必须是 `16` 的倍数。
- 长边与短边的比例不能超过 `3:1`。
- 总像素数必须不少于 `655,360`，且不超过 `8,294,400`。

#### 质量选项（Quality options）

- `low`：低质量
- `medium`：中等质量
- `high`：高质量
- `auto`：自动（默认）

## 在 Cherry Studio 中使用

1. 参考 [创建 API 令牌](/getting-started/api-token.html) 章节的教程，创建令牌“生图”分组令牌。
2. 打开 CherryStudio，点击右上角设置按钮，进入 `模型服务` 页面。

![Cherry Studio 模型服务页面，用于配置 gpt-image-2 图像模型](/images/tutorial/gpt-image-2-01-model-services.webp)

3. 在模型服务列表底部点击添加，新增一个提供商，可以参考图中填写。

![Cherry Studio 添加图像生成提供商的表单](/images/tutorial/gpt-image-2-02-add-provider.webp)

4. 进入刚创建的 GGUUAI 提供商，填写 API 配置。

- API 密钥：填写你的生图分组 API key
- API 地址：`{{API_BASE_URL}}`

![Cherry Studio 的 GGUUAI 图像提供商 API 配置](/images/tutorial/gpt-image-2-03-provider-settings.webp)

5. 点击模型区域右侧的 `获取模型列表`，刷新后添加 `gpt-image-2` 模型。添加完成后，可以在提供商配置页中看到模型列表里已经出现 `gpt-image-2`。

![Cherry Studio 获取模型列表后显示 gpt-image-2](/images/tutorial/gpt-image-2-04-fetch-models.webp)

6. 点击 `gpt-image-2` 右侧的编辑按钮，进入编辑模型窗口，将 `端点类型` 设置为 `图像生成（OpenAI）`，然后点击 `保存`。

![Cherry Studio 中点击 gpt-image-2 的编辑按钮](/images/tutorial/gpt-image-2-05-edit-model.webp)

![模型编辑窗口中将端点类型设置为图像生成（OpenAI）并保存](/images/tutorial/gpt-image-2-06-endpoint-type.webp)

7. 回到首页，点击顶部的 `+` 按钮，在应用列表中选择 `绘画`。

![Cherry Studio 首页应用列表中选择绘画功能](/images/tutorial/gpt-image-2-07-painting-app.webp)

8. 进入绘画页面后，左侧 `提供商` 选择刚才添加的供应商，`模型` 选择 `gpt-image-2`，即可输入提示词生图。

![Cherry Studio 绘画页面中选择提供商、gpt-image-2 模型并输入提示词](/images/tutorial/gpt-image-2-08-painting-prompt.webp)
