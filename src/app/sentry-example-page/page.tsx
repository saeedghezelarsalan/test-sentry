"use client";

import * as Sentry from "@sentry/nextjs";

export default function SentryExamplePage() {
  const triggerError = () => {
    try {
      // Intentionally trigger an error
      throw new Error("Test Error: App Router Frontend");
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  return (
    <div>
      <h1>Test Sentry in App Router</h1>
      <button onClick={triggerError}>Trigger Error</button>
    </div>
  );
}
