import { NextRequest, NextResponse } from "next/server";

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

// RFC 5321 max email length
const MAX_EMAIL_LEN = 254;
const MAX_NAME_LEN  = 100;
// Standard email format: local@domain.tld
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeName(raw: unknown): string {
  if (typeof raw !== "string") return "";
  // Strip angle brackets, quotes, and control characters; enforce length
  return raw.replace(/[<>"'`]/g, "").trim().slice(0, MAX_NAME_LEN);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (
      !email ||
      typeof email !== "string" ||
      email.length > MAX_EMAIL_LEN ||
      !EMAIL_RE.test(email.trim())
    ) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const safeEmail = email.trim().toLowerCase();
    const safeName  = sanitizeName(name);

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.warn("ConvertKit env vars not set — skipping subscription");
      return NextResponse.json({ success: true });
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key:    CONVERTKIT_API_KEY,
          email:      safeEmail,
          first_name: safeName,
        }),
      }
    );

    if (!res.ok) {
      console.error("ConvertKit error:", await res.text());
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
