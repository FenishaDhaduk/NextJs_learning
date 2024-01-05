import { Product } from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const fetchusertask = await Product.find({
        userId:params.userid
    })
    return NextResponse.json(fetchusertask)
}

export async function DELETE(request,{params}){
    const Deleteusertask = await Product.find({
        _id:params._id
    })

    return NextResponse.json({
        message:"Successfully Task Deleted",
        success:true,
        Deleteusertask
    },{status:200})
}