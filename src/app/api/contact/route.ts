import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budgetRange, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      ) as Response;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      ) as Response;
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's free tier sandbox domain
      to: 'harshaggarwal1502@gmail.com', // Verified Resend Sandbox recipient
      subject: `💼 New Project Lead: ${projectType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc; border-radius: 10px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">New Project Lead Received</h2>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Project Type:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${projectType}</span></p>
          <p style="font-size: 14px; margin-bottom: 20px;"><strong>Target Budget:</strong> ₹${budgetRange.toLocaleString('en-IN')} INR</p>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px;">
            <p style="margin-top: 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Details:</p>
            <p style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 0; font-size: 14px; color: #334155;">${message}</p>
          </div>
          <div style="margin-top: 20px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            Sent securely via Harsh's Portfolio Live Lead Dispatcher
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Transmission Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to dispatch email via Resend.' },
        { status: 500 }
      ) as Response;
    }

    return NextResponse.json({
      success: true,
      message: 'Your request was securely received! Harsh will contact you shortly.'
    }) as Response;

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    ) as Response;
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export const dynamic = 'force-dynamic';
