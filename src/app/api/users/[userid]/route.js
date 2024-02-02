import { User } from "@/app/models/user";
import { NextResponse } from "next/server";
import { connectUserDB } from "@/helper/db";

// dynamic routes pass id
connectUserDB();

export async function GET(request, { params }) {
  const { userid } = params;

  let users = [];
  try {
    users = await User.findById(userid).select("-password");
    console.log(users)
    return NextResponse.json({
      message: "Successfully user fetch",
      success: true,
      users,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to load a user",
        success: false,
      },
      { status: 400 }
    );
  }
}

export async function PUT(request, { params }) {
  const { userid } = params;
  const { name, email, password, PhoneNumber } = await request.json();

  try {
    const updateuser = await User.findById(userid);
    updateuser.name = name;
    updateuser.email = email;
    updateuser.password = password;
    updateuser.PhoneNumber = PhoneNumber;

    const saveresponce = await updateuser.save();
    return NextResponse.json(saveresponce);
  } catch (error) {
    return NextResponse.json({
      message: "Error in update user !!",
      success: false,
    });
  }
}
