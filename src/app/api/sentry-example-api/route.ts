import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    throw new Error("Test Error: App Router API");
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
