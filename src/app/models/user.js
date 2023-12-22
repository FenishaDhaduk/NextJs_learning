const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique:[true,"Email value not be a same"]
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [6, "Password must be at least 6 characters long"],
    unique:[true,"password not be same"]

  },
  about: String,
});

// create a model using a schema
export const User = mongoose.models.users || mongoose.model("users", userSchema);

