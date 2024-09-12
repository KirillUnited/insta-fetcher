import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const res = await fetch('https://fakestoreapi.com/users');
    const data = await res.json();


    return NextResponse.json(data)
}