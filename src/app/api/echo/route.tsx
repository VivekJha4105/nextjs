import { NextResponse } from "next/server";

//* Static Routes with request:Request Parameters.
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // const name = searchParams.get('name');
    // const lastName = searchParams.get('lastName');

    // return NextResponse.json({
    //     name, lastName
    // })

    const responseObj = Object.fromEntries(searchParams.entries());

    return NextResponse.json(responseObj);
}