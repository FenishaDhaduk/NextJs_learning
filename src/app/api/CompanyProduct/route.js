import { Product } from "@/app/models/Product";
import { NextResponse } from "next/server";

const { connectCompanyProductDB } = require("@/helper/db");

connectCompanyProductDB();

export async function GET() {
  let fetchProduct = [];
  try {
    fetchProduct = await Product.find();
    return NextResponse.json(fetchProduct);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to load a ProductData",
      status: false,
    });
  }
}

export async function POST(request) {
  try {
    const { title, content, status, userId } = await request.json();

    const Productdetails = new Product({
      title,
      content,
      status,
      userId,
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

