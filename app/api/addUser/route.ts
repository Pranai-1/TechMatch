import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function handler(req: NextRequest) {
    try {
        const body = await req.json(); // Parse the request body

        console.log(body);
        const user=await prisma.user.findFirst({where:{userId:body.userId}})
        if(!user){
        const res = await prisma.user.create({
            data: {
                userId: Number(body.userId),
                email: body.email,
                name: body.name,
                image: body.image,
                username: body.username, 
                likes: 0,
                languages: body.languages,
                bio: body.bio
            }
        });
    }else{
        const res = await prisma.user.update({
            where:{
                userId:user.userId
            },
            data: {
                email: body.email,
                name: body.name,
                image: body.image,
                username: body.username, 
                likes: 0,
                languages: body.languages,
                bio: body.bio
            }
        });
    }

        return NextResponse.json({ message: "success" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "failed" }, { status: 500 });
    } finally {
        await prisma.$disconnect(); // Ensure proper disconnection
    }
}

export { handler as POST };
