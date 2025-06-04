// app/api/contact/route.js
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: { json: () => PromiseLike<{ firstName: any; lastName: any; email: any; company: any; service: any; message: any; }> | { firstName: any; lastName: any; email: any; company: any; service: any; message: any; }; }) {
  const { firstName, lastName, email, company, service, message } = await request.json();
    console.log(firstName)
  try {
    await sql`
      INSERT INTO contacts (first_name, last_name, email, company, service, message, created_at)
      VALUES (${firstName}, ${lastName}, ${email}, ${company || null}, ${service}, ${message}, NOW())
    `;

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to save' }, { status: 500 });
  }
}