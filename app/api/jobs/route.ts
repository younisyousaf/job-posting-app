import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await auth();

    if (!session?.user || !session.user.id) return NextResponse.redirect(new URL("/auth/signin", request.url));

    try {
        const data = await request.json()

        const job = await prisma.job.create({
            data: {
                ...data,
                posted_by: {
                    connect: {
                        id: session.user.id
                    }
                }
            }
        })

        return NextResponse.json(job)
    } catch (error) {
        console.log("Error Creating Job", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function GET(request: Request) {
    try {
        const jobs = await prisma.job.findMany({
            orderBy: {
                posted_at: "desc"
            }
        })
        return NextResponse.json(jobs)
    } catch (error) {
        console.log("Error Fetching Jobs", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}