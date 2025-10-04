//@ts-ignore
import { NextResponse } from "next/server";

import connectDB from "@web/db/connectDB";
import { UserModel } from "@web/db/modals";

export async function GET() {
    await connectDB();
    return NextResponse.json({ message: "Hello World" });
}
