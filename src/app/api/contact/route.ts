import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Contact form submitted:", body);

  // Yahan real mein email bhej sakte ho (Nodemailer, Resend, etc.)
  // Abhi ke liye success return kar rahe hain

  return NextResponse.json({ message: "Success" }, { status: 200 });
}