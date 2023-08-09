import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    console.log("connected");
    // data = await Product.find();
    return NextResponse.json({
      result: "data",
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      result: error.message,
      status: 400,
      success: false,
    });
  }
}

export async function POST(request) {
  try {
    await mongoose.connect(connectionStr);

    const payload = await request.json();
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({
      result: result,
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      result: error.message,
      status: 400,
      success: false,
    });
  }
}
