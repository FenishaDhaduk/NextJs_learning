// mongoose help database connect kari sakiye.it is a library.mongoose provide a ORM Tool
import mongoose from "mongoose";

export const connectUserDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Work_manager",
    
    });
    console.log("connect with database");
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
export const connectWorkEmployeeDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Work_Employee",
    });
    console.log("Work is created");
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};

export const connectCompanyProductDB = async()=>{
  try {

    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
      dbName:"Company_Product"
    })
    console.log("Company product connect with database")
    
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error)
  }
}