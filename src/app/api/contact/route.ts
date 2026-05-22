import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Derd Vercel App <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Collaboration inquiry from ${email}`,
      replyTo: email,
      text: `
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}