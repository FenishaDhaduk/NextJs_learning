import { connectUserDB } from "@/helper/db";
import { NextResponse } from "next/server";

connectUserDB();

export async function POST(request) {
  const responce = NextResponse.json({
    message: "Loggedout Successfully",
    success: true,
  });
  responce.cookies.set({
    name: "token",
    value: "",
  });

  return responce;
}
