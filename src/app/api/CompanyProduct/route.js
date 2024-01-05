import { Product } from "@/app/models/Product";
import { NextResponse } from "next/server";

const { connectCompanyProductDB } = require("@/helper/db");
var jwt = require("jsonwebtoken");

connectCompanyProductDB();

export async function GET() {
  let fetchProduct = [];
  try {
    fetchProduct = await Product.find().sort({createdAt:-1})
    let totalProduct = await Product.countDocuments({});

    return NextResponse.json({fetchProduct,totalProduct});
  } catch (error) {
    console.log("🚀 ~ file: route.js:17 ~ GET ~ error:", error)
    return NextResponse.json({
      message: "Failed to load a ProductData",
      status: false,
    });
  }
}

export async function POST(request) {
  try {
    const { title, content, status, userId } = await request.json();
    const logintoken = request.cookies.get("token")?.value || "";
    const data = jwt.verify(logintoken, process.env.JWT_KEY);
console.log("data",data)
    const Productdetails = new Product({
      title,
      content,
      status,
      userId:data._id,
    });
    await Productdetails.save();
    return new Response(
      JSON.stringify({
        status: 200,
        message: "Successfully user created",
        Productdetails,
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

