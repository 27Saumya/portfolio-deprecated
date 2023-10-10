import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import Mail from "@/components/Mail";

const resend = new Resend(process.env.RESEND_API_KEY);
const mailTo: string = process.env.MY_EMAIL_ID!;

async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = req.body; 
    const { senderEmail, senderName, message } = body
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [mailTo],
      subject: `From: ${senderName}`,
      react: Mail(
        { senderEmail, senderName, message }
      )
    });
    res.status(200).json(data);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    res.status(500).json({500: "Internal Server Error"})
  };

};

export default POST;