import { NextRequest, NextResponse } from "next/server";

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;

// One ConvertKit form per lead magnet — set these in Cloudflare environment variables
const FORM_IDS: Record<string, string | undefined> = {
  "risk-overview": process.env.CONVERTKIT_FORM_ID_RISK,
  "newsletter":    process.env.CONVERTKIT_FORM_ID_NEWSLETTER,
};

const MAX_EMAIL_LEN = 254; // RFC 5321
const MAX_NAME_LEN  = 100;
const EMAIL_RE      = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeName(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.replace(/[<>"'`]/g, "").trim().slice(0, MAX_NAME_LEN);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, source } = body;

    if (
      !email ||
      typeof email !== "string" ||
      email.length > MAX_EMAIL_LEN ||
      !EMAIL_RE.test(email.trim())
    ) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const safeEmail  = email.trim().toLowerCase();
    const safeName   = sanitizeName(name);
    const safeSource = typeof source === "string" && source in FORM_IDS ? source : "newsletter";
    const formId     = FORM_IDS[safeSource];

    if (!CONVERTKIT_API_KEY || !formId) {
      console.warn(`ConvertKit env vars not set for source "${safeSource}" — skipping`);
      return NextResponse.json({ success: true });
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
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
