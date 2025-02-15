import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "josbor.dev@gmail.com",
      subject: 'Portfolio Contact: ' + name,
      html: `<p>${message}</p>
            <br>
            <br>
            <p>From: ${name}</p>
            <p>Email: ${email}</p>
      `,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error });
  }
}