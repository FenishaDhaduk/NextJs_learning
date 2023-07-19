import { Product } from "../../../model/product";
import { connectDB } from "../../../utils/database";

export default async function all(req, res) {
  await connectDB();

  const products = await Product.find({});
  res.status(200).json({ success: true, products });
}
