
import { NextResponse } from 'next/server'

//* GET method resonse are cached with NEXTJS, though there are ways to overwrite it.
export async function GET() {
    return NextResponse.json({ message: "Hello World" });
}
