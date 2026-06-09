---
title: "Billing Rules"
description: "1:1 exchange-rate credits, exchange-rate discount, group multipliers, and overseas and domestic model pricing examples."
---
# Billing Rules

This site uses a 1:1 exchange-rate credit system: 1 RMB = 1 USD credit.

Total discount = exchange-rate discount * group multiplier

## Exchange-Rate Discount

1 USD credit only requires a 1 RMB top-up.

## Group Multiplier

Different groups use different multiplier levels:

Multiplier = 1 means usage is charged at the official price.

Multiplier < 1 means a discount: for example, 0.5x = 50% off, so the same token usage costs 0.5 times the original price.

Multiplier > 1 means a premium: 1.5x = 50% extra, so the same token usage costs 1.5 times the base price.

## Overseas Models

::: tip Billing Rule
The base price is converted to RMB using the 1:1 exchange rate, then multiplied by the group multiplier on top of the RMB base price.
:::

For example:

| GPT-5.5 | Input | Output | Cache read |
| --- | ---: | ---: | ---: |
| Official OpenAI | $5/M | $30/M | $0.5/M |
| Base price on this site | ¥5/M | ¥30/M | ¥0.5/M |
| 0.5x multiplier on this site | ¥2.5/M | ¥15/M | ¥0.25/M |
| 1.5x multiplier on this site | ¥7.5/M | ¥45/M | ¥0.75/M |

## Domestic Models

::: tip Billing Rule
The base price is the official price, then multiplied by the group multiplier.
:::

For example:

| deepseek-v4-pro | Input | Output | Cache read |
| --- | ---: | ---: | ---: |
| Official deepseek-v4-pro | ¥3/M | ¥6/M | ¥0.025/M |
| Base price on this site | ¥3/M | ¥6/M | ¥0.025/M |
| 0.7x multiplier on this site | ¥2.1/M | ¥4.2/M | ¥0.0175/M |

