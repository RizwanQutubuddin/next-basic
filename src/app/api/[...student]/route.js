import { NextResponse } from "next/server";

export async function GET(request, content) {
  return NextResponse.json(
    {
      result: content.params.student,
    },
    { status: 200 }
  );
}
