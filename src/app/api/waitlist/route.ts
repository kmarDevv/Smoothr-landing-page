import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (body?.email || "").toString().trim().toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return NextResponse.json({ error: "Server not configured." }, { status: 500 });
    }

    const supabase = createClient(url, key);

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    // If email already exists, treat as success (nice UX)
    if (error && String(error.message).toLowerCase().includes("duplicate")) {
      return NextResponse.json({ ok: true });
    }
    if (error) {
      return NextResponse.json({ error: "Could not save email. Try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
}
