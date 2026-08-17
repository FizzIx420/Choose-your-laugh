---
name: Offline mobile companion
description: The Android edition of the haunted paperback is intentionally self-contained and local-first.
---

The Android companion keeps the complete story generator inside its own Expo artifact and stores run progress, reader settings, inventory, stats, and profile data on-device.

**Why:** The core experience is a single-player novel; requiring an account, API, or connection would undermine the requested offline Android use case.

**How to apply:** Preserve story-data parity between the web and mobile copies when authoring new pages or mechanics. Add backend services only for explicitly requested cross-device sync or shared features.