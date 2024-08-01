import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const data =  await req.json();

        if (!userId) {
            return new Response("Unauthorized", { status: 401 });
        }

        const car = await db.car.create({
            data: {
                userId,
                ...data
            }
        });

        return NextResponse.json(car, { status: 201 });
    } catch (error) {
        console.error("[CAR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}