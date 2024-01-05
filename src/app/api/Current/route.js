import { User } from "@/app/models/user";
import { connectUserDB } from "@/helper/db";
import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");

connectUserDB();

export async function GET(request) {
  try {
    const logintoken = request.cookies.get("token")?.value || "";
    console.log(logintoken,"logintoken")
    const data = jwt.verify(logintoken, process.env.JWT_KEY);
    const user = await User.findById(data._id);

    console.log(user,"user")
    return NextResponse.json(user);
  } catch (error) {
    console.log(error,"eroor")
    return NextResponse.json({
      message: "Failed to load a Currentuser",
      status: false,
    },{status:400});
  }
}
