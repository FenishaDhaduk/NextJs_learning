import { User } from "@/app/models/user";
import { connectUserDB } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectUserDB();

export async function GET() {
  let users = [];
  try {
    users = await User.find().select("-password");
    console.log("users", users);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to load a user",
      status: false,
    });
  }
}

export async function POST(request) {
  try {
    
    const { name, email, password, PhoneNumber} =
      await request.json();
    const user = new User({
      name,
      email,
      password,
      PhoneNumber,
    });
    console.log(name, email, password, PhoneNumber, "user");

    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    await user.save();

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Successfully user created",
        user,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        status: 500, // Internal Server Error
        message: "Failed to create a user",
        error: error.message,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}

export function DELETE() {
  return NextResponse.json(
    {
      message: "Deleted !!",
      status: true,
    },
    { status: 201, statusText: "status Text" }
  );
}
