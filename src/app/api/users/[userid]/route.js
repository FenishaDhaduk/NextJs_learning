import { NextResponse } from "next/server"

// dynamic routes pass id 
export function DELETE(request,{params}){
    const {userid} = params
    console.log("Delete api called",userid)
return NextResponse.json({
    message:'Deleted !!',
    status:true
},{status:201,statusText:'status Text'})    
}


