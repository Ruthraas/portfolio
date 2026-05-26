import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, message: "Please send name, email and message." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Transmission received. Arthur will answer from the command deck."
  });
}
