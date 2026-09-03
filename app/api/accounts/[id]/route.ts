import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { accountSchema } from "@/lib/schema";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!id) {
      throw new NotFoundError("ID");
    }

    await dbConnect();

    const account = await Account.findById(id);
    if (!account) {
      throw new NotFoundError("Account");
    }

    return NextResponse.json({ success: true, data: account }, { status: 200 });
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
      throw new NotFoundError("ID");
    }

    await dbConnect();

    const body = await request.json();

    const validatedData = accountSchema.partial().safeParse(body);
    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    const account = await Account.findById(id);
    if (!account) {
      throw new NotFoundError("Account");
    }
    const updatedUser = await Account.findByIdAndUpdate(
      id,
      validatedData.data,
      {
        new: true,
      },
    );

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
      throw new NotFoundError("ID");
    }

    await dbConnect();

    const account = await Account.findById(id);
    if (!account) {
      throw new NotFoundError("User");
    }
    await Account.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "User deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
