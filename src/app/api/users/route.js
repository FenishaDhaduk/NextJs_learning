import { User } from "@/app/models/user"
import { connectUserDB } from "@/helper/db"
import { NextResponse } from "next/server"

connectUserDB()

export async function GET(){
    let users = []
    try {
        users = await User.find().select("-password")
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to load a user",
            status:false
        })
        
    }

}

export async function POST(request){
    // // const jsondata = await request.json()

    // // pass a data into text than postman write data in body as a text 
    // const textdata = await request.text()
    // console.log(textdata)

    // return NextResponse.json({
    //     message:'posting user data'
    // })

    // Create a user
  try {
    const {name,email,password,about} = await request.json()
    const user = new User({
        name,email,password,about
    })
    await user.save()
    const responce = NextResponse.json(user,{
        status:200,
        message:"Successfully user created"
        
    })
   return responce;
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        message:"Failed to create a user",
        status:false
    })
  }
}   

export function DELETE(){
    console.log("Delete api called")
return NextResponse.json({
    message:'Deleted !!',
    status:true
},{status:201,statusText:'status Text'})    
}

export function PUT(){
    
}