import { NextResponse } from 'next/server';

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

    // Since this is a static-build friendly mock server that replicates live API behavior:
    // We log the message to simulated server database logs
    console.log('--- NEW PORTFOLIO CONTACT LEAD ---');
    console.log(`From: ${name} (${email})`);
    console.log(`Interest: ${projectType || 'General inquiry'}`);
    console.log(`Budget Range: $${budgetRange?.[0] || 'Unspecified'} - $${budgetRange?.[1] || 'Unspecified'}`);
    console.log(`Message: ${message}`);
    console.log('----------------------------------');

    // Simulate database write / network transmission latency
    await new Promise((resolve) => setTimeout(resolve, 800));

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
