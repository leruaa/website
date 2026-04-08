---
name: Use bun instead of npm
description: User uses bun as package manager, not npm
type: feedback
---

Always use `~/.bun/bin/bun` (or `bun` if in PATH) instead of `npm` for installing packages.

**Why:** User's package manager is bun.
**How to apply:** Replace any `npm install` / `npm add` with `bun add`, and `npm run` with `bun run`.
