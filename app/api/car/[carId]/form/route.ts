import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function PATCH(req: Request, { params } : { params: { carId: string } }) {
    try {
        const { userId } = auth();
        const { carId } = params;
        const values =  await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const car = await db.car.update({
            where: {
                id: carId,
                userId
            },
            data: {
                ...values
            }
        });

        return NextResponse.json(car, { status: 201 });
    } catch (error) {
        console.error("[CAR FORM ID]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}