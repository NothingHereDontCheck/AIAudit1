import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      // Gracefully degrade — log and succeed locally for dev/test
      console.warn("ConvertKit env vars not set — skipping subscription");
      return NextResponse.json({ success: true });
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
          first_name: name ?? "",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("ConvertKit error:", err);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
