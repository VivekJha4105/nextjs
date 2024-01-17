
import { NextResponse } from "next/server"

type FormData = {
    name?: string,
    password?: string,
    message?: string,
}

export async function POST(request: Request) {
    const formData: FormData = await request.json();

    console.log("formData", formData);

    return NextResponse.json(formData);
}