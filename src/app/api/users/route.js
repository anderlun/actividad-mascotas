import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();



export async function POST(request){
    try {
        const {fullname,email,password}= await request.json();

        const newUsers = await prisma.users.create(
            {data: {
                fullname, email, password
            }
        })
        return NextResponse.json(
            {
                message: 'usuario registrado', newUsers
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error.message,
        },
        {
            status: 500,
        })
    }
}