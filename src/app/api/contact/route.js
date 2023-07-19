import { connectDB } from "../../../../utils/connectDB";
import Contact from "../../../../model/Contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await connectDB();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
