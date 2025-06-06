// app/api/contact/route.js
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: { json: () => PromiseLike<{ firstName: string; lastName: string; email: string; company: string; service: string; message: string; }> | { firstName: string; lastName: string; email: string; company: string; service: string; message: string; }; }) {
  const { firstName, lastName, email, company, service, message } = await request.json();
    console.log(firstName)
  try {
    await sql`
      INSERT INTO contacts (first_name, last_name, email, company, service, message, created_at)
      VALUES (${firstName}, ${lastName}, ${email}, ${company || null}, ${service}, ${message}, NOW())
    `;

    return Response.json({ success: true });
  } catch (error) {
    console.log(error)
    return Response.json({ error: 'Failed to save' }, { status: 500 });
  }
}