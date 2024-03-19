import { connectMongoDB } from "@/libs/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(request) {

    const { name, email } = await request.json()
    await connectMongoDB()

    await User.create({ name, email })

    return NextResponse.json({ message: "User Registered" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const users = await User.find()
    return NextResponse.json(users, { status: 200 })
}