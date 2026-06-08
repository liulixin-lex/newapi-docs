---
title: "Billing Rules"
description: "USD billing, exchange rate, group multipliers, and overseas and domestic model pricing examples."
---
# Billing Rules

This site uses USD `$` billing.

## Exchange Rate

1 USD = 6.8 RMB

## Group Multiplier

Different groups use different multiplier levels:

Multiplier = 1 means usage is charged at the official price.

Multiplier < 1 means a discount: for example, 0.5x = 50% off, so the same token usage costs 0.5 times the original price.

Multiplier > 1 means a premium: 1.5x = 50% extra, so the same token usage costs 1.5 times the base price.

## Overseas Models

::: tip Billing Rule
Because this site uses USD pricing, overseas models use only one multiplier: the group multiplier.
:::

For example:

::: info Example
This site's 0.1x multiplier = official price * 0.1.
:::

| GPT-5.5 | Input | Output | Cache read |
| --- | ---: | ---: | ---: |
| Official OpenAI | $5/M | $30/M | $0.5/M |
| Base price on this site | $5/M | $30/M | $0.5/M |
| 0.5x multiplier on this site | $2.5/M | $15/M | $0.25/M |
| 1.5x multiplier on this site | $7.5/M | $45/M | $0.75/M |

## Domestic Models

::: tip Billing Rule
Because this site uses USD pricing, domestic models use: exchange rate * group multiplier.
:::

For example:

::: info Example
This site's 0.103x multiplier = 0.147 (exchange rate) * 0.7 (discount multiplier), which equals 0.7x of the official price.
:::

| deepseek-v4-pro | Input | Output | Cache read |
| --- | ---: | ---: | ---: |
| Official deepseek-v4-pro | ¥3/M | ¥6/M | ¥0.025/M |
| Base price on this site | $3/M | $6/M | $0.025/M |
| 0.103x multiplier on this site | $0.309/M | $0.618/M | $0.002575/M |

