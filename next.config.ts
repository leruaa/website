import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    // Relative path(s) to source files
    srcPath: "./app",

    extract: {
      // Defines which locale to extract to
      sourceLocale: "fr",
    },
    messages: {
      // Relative path to the directory
      path: "./messages",

      // Either 'json', 'po', or a custom format (see below)
      format: "json",

      // Either 'infer' to automatically detect locales based on
      // matching files in `path` or an explicit array of locales
      locales: ["en", "fr"],
    },
  },
});

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
