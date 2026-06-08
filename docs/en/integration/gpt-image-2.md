---
title: "GPT-Image-2 Setup Guide"
description: "Use gpt-image-2 for text-to-image generation, image editing, and Cherry Studio image-generation setup."
---
# GPT-Image-2 Setup Guide

OpenAI image-related capabilities are divided into three categories: Responses API, Images API, and Chat Completions API. GGUUAI's `gpt-image-2` supports the Images API.

**Images API** is the recommended way to generate images with `gpt-image-2`. It includes two interfaces: text-to-image generation and image editing.

- Text to image: `POST https://api.gguuai.com/v1/images/generations`
- Image editing / image to image: `POST https://api.gguuai.com/v1/images/edits`

Each interface below is explained in the format `API example -> parameter description`. For beginners, first follow the example and pass `model` and `prompt`, then set `n` to `1`. When you need to upload an image, use the `image` field.

## Text to Image: /v1/images/generations

### API Example

```bash
curl --location 'https://api.gguuai.com/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer your image-generation group token' \
--header 'Accept: */*' \
--header 'Host: api.gguuai.com' \
--header 'Connection: keep-alive' \
--data '{
    "model": "gpt-image-2",
    "prompt": "An orange cat wearing sunglasses, cyberpunk style",
    "size": "1024x1024",
    "quality": "high",
    "output_format": "png",
    "response_format": "url",
    "n": 1
}'
```

### Text-to-image Parameters

| Parameter | Type | Support | Description |
| --- | --- | --- | --- |
| `model` | string | Supported | Always set this to `gpt-image-2`. |
| `prompt` | string | Supported | The image description prompt. Describe the subject, scene, style, aspect ratio, and text content clearly. |
| `n` | integer | Only supports 1 | Only one image can be returned per request. Multiple images in one request are not supported. |
| `size` | string | Supported | Supports `auto` and valid sizes such as `1024x1024`, `1536x1024`, `1024x1536`, `1536x864`, and `3840x2160`. |
| `quality` | string | Supported | Options: `low`, `medium`, `high`, `auto`. Use `low` for drafts and `high` for final images. |
| `response_format` | string | Supported | Options: `url`, `b64_json`. `url` is recommended by default; `b64_json` is suitable when your program saves images itself. |
| `output_format` | string | Partially supported | `png` or `jpeg` is recommended. |
| `output_compression` | integer | Supported | Recommended only when `output_format` is `jpeg`. Value range: `0` to `100`. |
| `background` | string | Partially supported | Use the default value or `opaque`. |
| `moderation` | string | Supported | Options: `auto`, `low`. This is a safety review parameter and does not directly change the image style. Keep the default if you are unsure. |
| `user` | string | Supported | Optional. Used to label your own end user or business source. Regular calls can omit it. |

## Image Editing / Image to Image: /v1/images/edits

`/v1/images/edits` uses `multipart/form-data` to upload images. `image` is the binary image file, and `prompt` should clearly describe how you want to modify the image.

### API Example

```bash
curl --location 'https://api.gguuai.com/v1/images/edits' \
--header 'Authorization: Bearer your image-generation group token' \
--header 'Accept: */*' \
--form 'model="gpt-image-2"' \
--form 'prompt="Remove the sunglasses from the cat and add a hat"' \
--form 'image=@"/path/to/your-image.jpg"' \
--form 'size="1024x1024"' \
--form 'quality="high"' \
--form 'output_format="png"' \
--form 'response_format="url"'
```

### Image Editing Parameters

| Parameter | Type | Support | Description |
| --- | --- | --- | --- |
| `model` | string | Supported | Always set this to `gpt-image-2`. |
| `prompt` | string | Supported | Clearly describe what to preserve, what to modify, and what final result you want. |
| `image` | file | Supported | Required. Upload the binary image file to edit. It is recommended to upload only one image at a time. |
| `mask` | file | Supported | Optional. You can pass a PNG mask for local edits. If omitted, the request is treated as full-image editing. |
| `n` | integer | Only supports 1 | Only one image can be returned per request. |
| `size` | string | Supported | Same as text to image. Supports `auto` and valid sizes. |
| `quality` | string | Supported | Options: `low`, `medium`, `high`, `auto`. |
| `response_format` | string | Supported | Options: `url`, `b64_json`. `url` is recommended by default. |
| `output_format` | string | Partially supported | `png` or `jpeg` is recommended. |
| `output_compression` | integer | Supported | Recommended only when `output_format` is `jpeg`. Value range: `0` to `100`. |
| `background` | string | Partially supported | Use the default value or `opaque`. |
| `moderation` | string | Supported | Options: `auto`, `low`. This is a safety review parameter and does not directly change the image style. |
| `input_fidelity` | string | Supported | For image editing, you can pass `high` to preserve the original subject and details as much as possible. |
| `user` | string | Supported | Optional. Regular calls can omit it. |
| `stream` | boolean | Not supported | Do not enable it. |
| `partial_images` | integer | Not supported | Intermediate image return depends on `stream` and is not supported. |

## General Notes

### Size and Quality

#### Popular Sizes

- `1024 x 1024`: square
- `1536 x 1024`: landscape
- `1024 x 1536`: portrait
- `2048 x 2048`: 2K square
- `2048 x 1152`: 2K landscape
- `3840 x 2160`: 4K landscape
- `2160 x 3840`: 4K portrait
- `auto`: automatic (default)

#### Size Constraints

- The longest side must be less than or equal to `3840` pixels.
- Both width and height must be multiples of `16`.
- The ratio between the long side and the short side must not exceed `3:1`.
- Total pixels must be at least `655,360` and no more than `8,294,400`.

#### Quality Options

- `low`: low quality
- `medium`: medium quality
- `high`: high quality
- `auto`: automatic (default)

## Use in Cherry Studio

1. Follow [Create an API Token](/en/getting-started/api-token.html) to create a token in the image-generation group.
2. Open Cherry Studio, click the settings button in the upper-right corner, and enter the `Model Services` page.

![Cherry Studio Model Services page for configuring the gpt-image-2 image model](/images/tutorial/93.png)

3. At the bottom of the model service list, click `Add` to create a new provider. You can use the screenshot as a reference.

![Form for adding an image generation provider in Cherry Studio](/images/tutorial/94.png)

4. Open the GGUUAI provider you just created and fill in the API configuration.

- API key: enter your image-generation group API key.
- API address: `https://api.gguuai.com`

![GGUUAI image provider API settings in Cherry Studio](/images/tutorial/95.png)

5. Click `Get model list` on the right side of the model area. After refreshing, add the `gpt-image-2` model. When it is added, you can see `gpt-image-2` in the model list on the provider configuration page.

![gpt-image-2 shown in Cherry Studio after fetching the model list](/images/tutorial/96.png)

6. Click the edit button on the right side of `gpt-image-2`, open the model editing window, set `Endpoint type` to `Image generation (OpenAI)`, then click `Save`.

![Edit button for gpt-image-2 in Cherry Studio](/images/tutorial/97.png)

![Model edit window with endpoint type set to Image generation (OpenAI) and saved](/images/tutorial/98.png)

7. Return to the home page, click the `+` button at the top, and choose `Painting` from the app list.

![Cherry Studio home application list with Painting selected](/images/tutorial/99.png)

8. After entering the painting page, choose the provider you just added under `Provider` on the left, choose `gpt-image-2` under `Model`, then enter a prompt to generate images.

![Cherry Studio Painting page with provider, gpt-image-2 model, and prompt input selected](/images/tutorial/100.png)

