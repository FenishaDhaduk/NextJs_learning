import { User } from "@/app/models/user"
import { connectDB } from "@/helper/db"
import { NextResponse } from "next/server"

connectDB()

export function GET(){
    const users = [
        {
            name:"FenishaDhaduk",
            phonno:123456789,
            language:"NextJs"
        },
        {
            name:"JohnDoe",
            phonno:123456789,
            language:"JAVA"
        },
        {
            name:"TomJerry",
            phonno:123456789,
            language:"NODEJS"
        }
    ]
    // nextResponce responce send karva mate
    return NextResponse.json(users)

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
    const {name,email,password,about} = request.json()
    const user = new User({
        name,email,password,about
    })
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