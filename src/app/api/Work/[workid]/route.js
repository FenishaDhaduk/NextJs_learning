import { WorkDataemploye } from "@/app/models/work";
import { NextResponse } from "next/server";
const { connectWorkEmployeeDB } = require("@/helper/db");

connectWorkEmployeeDB();

export async function GET(request, { params }) {
  const {workid} = params
  let workdata = []
  try {
    workdata = await WorkDataemploye.findById(workid)
      return NextResponse.json(workdata)
  } catch (error) {
      return NextResponse.json({
          message:"Failed to load a WorkData",
          status:false
      })
      
  }
}

export async function PUT(request, { params }) {
  const { workid } = params;
  const { Workname, entity, description, usecomments, progress } =
    await request.json();

  try {
    const updateworkdata = await WorkDataemploye.findById(workid);
    updateworkdata.Workname = Workname;
    updateworkdata.entity = entity;
    updateworkdata.description = description;
    updateworkdata.usecomments = usecomments;
    updateworkdata.progress = progress;

    const saveresponce = await updateworkdata.save();
    return NextResponse.json(saveresponce);
  } catch (error) {
    return NextResponse.json({
      message: "Error in update user !!",
      success: false,
    });
  }
}

export async function DELETE(request, { params }) {
  const { workid } = params;
  try {
    await WorkDataemploye.deleteOne({
      _id: workid,
    });
    return NextResponse.json({
      message: "Successfully deleted a workdata",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in Delete workdata !!",
      success: false,
    });
  }
}
