import { WorkDataemploye } from "@/app/models/work";
import { NextResponse } from "next/server";
const { connectWorkEmployeeDB } = require("@/helper/db");

connectWorkEmployeeDB();

export async function GET() {
  let fetchworkData = [];
  try {
    fetchworkData = await WorkDataemploye.find();
    return NextResponse.json(fetchworkData);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to load a workdata",
      status: false,
    });
  }
}

export async function POST(request) {
  try {
    const { Workname, entity, description, usecomments, progress } =
    await request.json();
    const workdatapost = new WorkDataemploye({
      Workname,
      entity,
      description,
      usecomments,
      progress,
    });
    await workdatapost.save();

    const responce = NextResponse.json(workdatapost, {
        status: 200,
        message: "Successfully workdata created",
    });
    return responce;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to create a workdata",
      status: false,
    });
  }
}
