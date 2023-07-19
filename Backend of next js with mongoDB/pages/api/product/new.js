import mongoose from "mongoose";
import { Product } from "../../../model/product";
import { connectDB } from "../../../utils/database";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).json({
      success: false,
      message: `no Api with ${req.method} method`,
    });
  } else {
    await connectDB();

    const { name, price, category } = req.body;

    Product.create({
      name,
      price,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Products created successfully",
    });
  }
};
