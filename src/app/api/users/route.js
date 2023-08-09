import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

//== GET ===
export function GET(request, content) {
  const userid = content.params.userid;
  const data = users.filter((item) => item.id == userid);
  return NextResponse.json(
    data.length == 0
      ? { result: "Data Not FOund", success: false }
      : { result: data, success: true },
    { status: 200 }
  );
}

//== POST ===
export async function POST(request) {
  const payload = await request.json();
  console.log("payload", payload);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({
      result: "required field not found",
      success: false,
      status: 400,
    });
  }

  return NextResponse.json({
    result: "New user created successfully",
    success: true,
    status: 201,
  });
}
