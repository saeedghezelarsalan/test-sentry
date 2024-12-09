import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://93a56a38f1340e6bf5353e49b817f950@o4508434995281920.ingest.us.sentry.io/4508437877030912",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: 1.0,
  debug: true, // Enable debug logs

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
