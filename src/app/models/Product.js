const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "ProductName is required"],
  },
  content: {
    type: String,
    required: [true, "CompanyName is required"],
  },
  status:{
    type:String,
    enum:["Pending","Completed","Added"],
    default:"Pending"
  },
  userId:{
    type:mongoose.ObjectId,
    required:true
  }

});


export const  Product = mongoose.models.productdetails || mongoose.model("productdetails",productSchema)
