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
    const {
      ProductName,
      CompanyName,
      ProductPrize,
      Quailty,
      Description,
      category,
    } = await request.json();

    const Productdetails = new Product({
      ProductName,
      CompanyName,
      ProductPrize,
      Quailty,
      Description,
      category,
    });
    await Productdetails.save();
    console.log("Productdetails",Productdetails)
    const responce = NextResponse.json(Productdetails, {
      status: 200,
      message: "Successfully workdata created",
    });
    return responce;
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Create a ProductData",
      status: false,
    });
  }
}
