import { Product } from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const fetchusertask = await Product.find({
        userId:params.userid
    })
    return NextResponse.json(fetchusertask)
}