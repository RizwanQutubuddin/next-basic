import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

//=== GET by ID ===
export function GET(request, content) {
  const userid = content.params.userid;
  const data = users.filter((item) => item.id == userid);
  return NextResponse.json(
    data.length == 0
      ? { result: "Data Not FOund", success: false }
      : { result: data[0], success: true },
    { status: 200 }
  );
}

//=== PUT ===
export async function PUT(request, content) {
  const payload = await request.json();
  payload.id = content.params.userid;
  console.log("payload", payload);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({
      result: "required field not found",
      success: false,
      status: 400,
    });
  }

  return NextResponse.json({
    result: payload,
    success: true,
    status: 200,
  });
}

//=== DELETE ===
export async function DELETE(request, { params }) {
  const id = params.userid;
  if (id) {
    return NextResponse.json({
      result: "Delete successfully",
      success: true,
      status: 200,
    });
  } else {
    return NextResponse.json({
      result: "Internal error,",
      success: false,
      status: 400,
    });
  }
}
