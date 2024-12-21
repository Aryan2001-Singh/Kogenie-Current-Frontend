import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

// Initialize DB connection
const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

// POST method to handle subscription
export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get('email')}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}

// GET method to retrieve all emails
export async function GET() {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}

// DELETE method to delete an email by id
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id"); // Correct way to access query params
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email Deleted" });
}
