import type { NextConfig } from "next";
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // }
};

module.exports = withSentryConfig(nextConfig, {
  org: "webface",
  project: "initial-test-sentry",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true,
  //
  // sourcemaps: {
  //   disable: true,
  // },
});


export default nextConfig;
