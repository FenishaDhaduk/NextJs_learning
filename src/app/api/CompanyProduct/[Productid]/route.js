import { Product } from "@/app/models/Product";
import { NextResponse } from "next/server";

const { connectCompanyProductDB } = require("@/helper/db");

connectCompanyProductDB();

export async function GET(request, { params }) {
  let fetchproduct = [];
  const { Productid } = params;
  try {
    fetchproduct = await Product.findById(Productid);
    return NextResponse.json(fetchproduct);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to load a ProductData",
      status: false,
    });
  }
}
export async function PUT(request, { params }) {
  const { Productid } = params;
  const {
    title,
    content,
    addedDate,
    status,
    userId
  } = await request.json();
  try {
    const UpdateProductdata = await Product.findById(Productid);
    UpdateProductdata.title = title;
    UpdateProductdata.content = content;
    UpdateProductdata.status = status;
    UpdateProductdata.userId = userId;
 
    const saveresponce = await UpdateProductdata.save();
    return NextResponse.json(saveresponce);
  } catch (error) {
    return NextResponse.json({
      message: "Error in update productdata !!",
      success: false,
    });
  }
}

export async function DELETE(request, { params }) {
  const { Productid } = params;

  try {
    await Product.deleteOne({
      _id: Productid,
    });
    return NextResponse.json({
      message: "Successfully deleted a Productdata",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in Delete Productdata !!",
      success: false,
    });
  }
}
