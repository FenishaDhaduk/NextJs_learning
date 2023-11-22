import { NextResponse } from "next/server";

export function GET(request,{params}){
const {userid,postid} = params
    return NextResponse.json(params)

}