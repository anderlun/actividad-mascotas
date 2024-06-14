import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    const res = await prisma.races.findMany();
    if(res.length>0){
        return new Response(JSON.stringify(res),
            {headers:{'Content-type': 'application/json'},
            status: 200
        })
    }else{
        return NextResponse.json(
            {
                message: 'No se encontraron razas'
            },
            {
                status: 404
            }
        )
    }
}