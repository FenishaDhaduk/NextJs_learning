import { User } from "@/app/models/user"
import { NextResponse } from "next/server"
import { connectUserDB } from "@/helper/db"


// dynamic routes pass id 
connectUserDB()

export async function GET(request, { params }) {
    const {userid} = params

    let users = []
    try {
        users = await User.findById(userid).select("-password")
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to load a user",
            status:false
        })
        
    }
  }
 
  
 export async function PUT(request,{params}){
    const {userid} = params
    const {name,email,password,about} = await request.json()

    try {
       const updateuser = await User.findById(userid) 
       updateuser.name = name;
       updateuser.email = email;
       updateuser.password = password;
       updateuser.about = about

       const saveresponce = await updateuser.save()
       return NextResponse.json(saveresponce)
    } catch (error) {
        return NextResponse.json({
            message:'Error in update user !!',
            success:false
        }) 
    }
 }

export async function DELETE(request,{params}){
    const {userid} = params
    try {
        await User.deleteOne({
            _id:userid
        })
        return NextResponse.json({
            message:"Successfully deleted a user",
            success:true
        })
    } catch (error) {
        return NextResponse.json({
            message:'Error in Delete user !!',
            success:false
        }) 
    }
  
   
}



