// mongoose help database connect kari sakiye.it is a library.mongoose provide a ORM Tool
import { User } from "@/app/models/user";
import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
      const {connection} = await  mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:"Work_manager",
      })

    // testing and creating a user
//    const user = new User({
//     name:"fenisha",
//     email:"fenisha.d@upsquare.in",
//     password:"123456789",
//     about:"this is  a testing"
//    })
//    await user.save()
 console.log("user is created")
//  console.log("db connect")
 
    } catch (error) {
        console.log("failed to connect with database")
        console.log(error)
    }
}