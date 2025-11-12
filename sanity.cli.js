/**
 * Sanity CLI Configuration
 * Used by Sanity CLI commands
 */

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "ff8zfxhv",
    dataset: "production",
  },
});
