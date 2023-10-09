import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, message } = body
    const data = await resend.emails.send({
      from: "patelsaumya767@gmail.com",
      to: ["patelsaumya767@gmail.com"],
      subject: `From: ${name}\n\n${message}`,
  });

  return NextResponse.json(data);
} catch (error) {
  return NextResponse.json({ error });
}
}