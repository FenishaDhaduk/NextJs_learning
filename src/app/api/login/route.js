import { User } from "@/app/models/user";
import { connectUserDB } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
var jwt = require('jsonwebtoken');

connectUserDB();

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const login = await User.findOne({
      email: email,
    });
    if (login == null) {
      throw new Error("user is not found");
    }
    const matched = bcrypt.compare(password, login.password);
    if (!matched) {
      throw new Error("password is not matched");
    }

    // Generated jwttoken
    // Jwt.sign(data,key)
    const token = await jwt.sign(
      {
        _id: login._id,
        name: login.name,
      },
     "asdfghjk"
    );
    // create a nextresponce : cookie
    console.log(token,"responce");
    const responce = await NextResponse.json({
      message: "successfully user login !!",
      success: true,
    });
    // cookies.set(name,value,option)
    responce.cookies.set("logintoken", token);
    return responce;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
}
