import { NextResponse } from "next/server";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const contactEmail =
  process.env.MAILERSEND_TO_EMAIL ?? "arthurpedrosodealmeida@gmail.com";
const senderName = process.env.MAILERSEND_FROM_NAME ?? "Arthur Portfolio";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, message: "Please send name, email and message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILERSEND_API_KEY;
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { ok: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const mailerSend = new MailerSend({
    apiKey
  });

  const sentFrom = new Sender(fromEmail, senderName);
  const recipients = [new Recipient(contactEmail, "Arthur Pedroso de Almeida")];
  const replyTo = new Recipient(email, name);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(replyTo)
    .setSubject(`Portfolio contact: ${name}`)
    .setText(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    .setHtml(`
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `);

  try {
    await mailerSend.email.send(emailParams);
  } catch {
    return NextResponse.json(
      { ok: false, message: "Email could not be sent." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Transmission received. Arthur will answer from the command deck."
  });
}
