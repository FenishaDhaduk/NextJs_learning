const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
  ProductName: {
    type: String,
    required: [true, "ProductName is required"],
  },
  CompanyName: {
    type: String,
    required: [true, "CompanyName is required"],
  },
  ProductPrize: {
    type: Number,
    required: [true, "ProductPrize is required"],
  },
  Quailty:{
    type:String,
    required:[true,"ProductQuiality is required"]
  },
  Description:{
    type:String
  },
  category:{
    type:String,
  }
});


export const  Product = mongoose.models.productdetails || mongoose.model("productdetails",productSchema)
