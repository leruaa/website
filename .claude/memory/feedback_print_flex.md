---
name: Print page breaks don't work inside flex containers
description: break-after/break-before are ignored by browsers inside flex containers during print
type: feedback
---

`page-break-after: avoid` and `break-after: avoid` on `h2` have no effect when the parent is a flex container — browsers silently ignore break rules inside flexbox.

**Why:** CSS fragmentation spec doesn't fully apply to flex/grid containers in most browsers.
**How to apply:** When fixing print page-break issues, always switch flex containers to `display: block` at print time (e.g. via a `.print-block` class with `display: block !important` in `@media print`).
