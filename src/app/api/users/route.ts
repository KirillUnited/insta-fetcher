import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = 'https://api.escuelajs.co/api/v1/users'
    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data)
}