import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { userSchema } from "@/lib/schema";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!id) {
      throw new NotFoundError("ID not found");
    }

    await dbConnect();

    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!id) {
      throw new NotFoundError("ID not found");
    }

    await dbConnect();

    const body = await request.json();

    const validatedData = userSchema.partial().safeParse(body);
    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    const updatedUser = await User.findByIdAndUpdate(id, validatedData.data, {
      new: true,
    });

    return NextResponse.json(
      { success: true, data: updatedUser },
      { status: 200 },
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!id) {
      throw new NotFoundError("ID not found");
    }

    await dbConnect();

    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    await User.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "User deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
