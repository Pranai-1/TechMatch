import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function handler(req: NextRequest) {
  const body=await req.json()

    try {
        const user = await prisma.user.findFirst({ where: { userId: body.id } });
        if (user) {
            const languages = user.languages;
            console.log(languages);

            const matchedUser = await prisma.user.findFirst({
                where: {
                    userId: { not: body.id }, // Exclude the user itself
                    languages: {
                        has: languages[0]
                    }
                }
            });

            if (matchedUser) {
               return NextResponse.json({ message: "success in first", matchedUser },{status:200});
            } else {
                const randomUser = await prisma.user.findFirst({
                    where: {
                        userId: { not: body.id }, // Exclude the user itself
                    }
                });
                return NextResponse.json({ message: "success in second", matchedUser: randomUser },{status:200});
            }
        } else {
            return NextResponse.json({ message: "User not found", matchedUser: [] },{status:404});
        }
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ message: "server error", matchedUser: [] },{status:500});
    } finally {
        prisma.$disconnect();
    }
}

export {handler as POST};
