// app/api/contact/route.ts
import { neon } from '@neondatabase/serverless';
import { NextRequest } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, service, message }: ContactFormData = await request.json();
    
    console.log(firstName);
    
    await sql`
      INSERT INTO contacts (first_name, last_name, email, company, service, message, created_at)
      VALUES (${firstName}, ${lastName}, ${email}, ${company || null}, ${service}, ${message}, NOW())
    `;

    return Response.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to save' }, { status: 500 });
  }
}