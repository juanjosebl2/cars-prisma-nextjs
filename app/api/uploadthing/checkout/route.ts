import { db } from '@/lib/db';
import { stripe } from '@/lib/stripe';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': "Content-Type, Authorization",
};

export async function POST(req: Request, {params} : {params: {
    carId: string,
    priceDay: string,
    startDate: Date,
    endDate: Date,
    carName: string
}}) {
    const {userId} = auth()
    const {carId, priceDay, startDate, endDate, carName} = await req.json()

    if(!userId) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    const numberOfDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24))

    const totalAmount = Number(priceDay) * numberOfDays
    const totalAmountStripe = Number(priceDay) * 100 * numberOfDays

    const line_items : Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
            quantity: 1,
            price_data: {
                currency: 'EUR',
                product_data: {
                    name: carName,
                },
                unit_amount: totalAmountStripe,
            },
        },
    ];

    const order = await db.order.create({
        data: {
            carId,
            carName: carName,
            userId: userId,
            status: "confirmed",
            totalAmount: totalAmount.toString(),
            orderDate: startDate,
            orderEndDate: endDate,
        }
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        billing_address_collection: "required",
        phone_number_collection: {
            enabled: true 
        },
        success_url: `${process.env.NEXT_PUBLIC_FRONTED_STORE_URL}/order-confirmation`,
        cancel_url: `${process.env.NEXT_PUBLIC_FRONTED_STORE_URL}/order-error`,
        metadata: {
            orderId: order.id,
            carId: carId,
            startDate,
            endDate,
            numberOfDays
        },
    });

    return NextResponse.json({url: session.url}, {headers: corsHeaders})
}