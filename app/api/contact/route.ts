import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  leadSource?: string;
  requirements?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, leadSource, requirements } = payload;

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "First name, last name, and email are required." },
      { status: 400 }
    );
  }

  const functionUrl = process.env.ZOHO_CRM_FUNCTION_URL;
  const apiKey = process.env.ZOHO_CRM_FUNCTION_API_KEY;

  if (!functionUrl || !apiKey) {
    console.error("Zoho CRM function credentials are not configured.");
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  const zohoResponse = await fetch(
    `${functionUrl}?auth_type=apikey&zapikey=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        arguments: {
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Lead_Source: leadSource ?? "",
          Requirements: requirements ?? "",
        },
      }),
    }
  );

  if (!zohoResponse.ok) {
    const errorText = await zohoResponse.text();
    console.error("Zoho CRM function call failed:", zohoResponse.status, errorText);
    return NextResponse.json(
      { error: "Failed to submit the form. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
