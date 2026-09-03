import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { userSchema } from "@/lib/schema";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validatedData = userSchema.partial().safeParse(body);
    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    const { email } = validatedData.data;

    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFoundError("User");
    }

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
