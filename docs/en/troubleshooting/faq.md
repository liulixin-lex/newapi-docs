---
title: "FAQ"
description: "Common issues about credits, channels, 401, 402, 404, 429, and 5xx errors."
---
# FAQ

## Enough Account Balance, but the Error Says Insufficient Credits?

Token credit limits and account balance are separate. Each token has its own usage limit. Even if your account balance is enough, you will still see an error when the token's own credit limit is used up.

**Solution**: Edit the token in the console, increase its credit limit, or enable unlimited credit.

## No Available Channel?

The model you requested is not included in the current token's group, or all channels in that group are unavailable.

**Solution**: Create a new token in a group that includes the model, or try another model.

## Common Error Codes

- 401 Unauthorized: invalid token

**Check**:

Whether the token was copied correctly, with no extra spaces.

Whether the token has been deleted or expired.

Whether the request header format is correct: `Authorization: Bearer sk-xxxxx`

- 402 Payment Required: insufficient balance

**Solution**: Sign in to the console and top up your balance.

- 404 Not Found: endpoint does not exist

**Check**:

Whether the Base URL is correct: `{{API_V1_BASE_URL}}`

::: warning /v1 Path Check
Do not add or omit `/v1` by mistake.
:::

```bash
# Correct
base_url = "{{API_V1_BASE_URL}}"

# Wrong: this may become /v1/v1/chat/completions
base_url = "{{API_V1_BASE_URL}}/"
```

- 429 Too Many Requests: requests are too frequent

Solution: wait a few seconds and try again, or lower your request frequency.

- 500 / 502 / 503: server-side error

The upstream model may be temporarily unavailable.

**Solution**:

1. Wait one minute and retry.
2. Try another model.
3. If the issue continues, contact support.

