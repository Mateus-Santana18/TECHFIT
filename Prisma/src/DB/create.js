import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.usuarios.create({ 
        data: {
            
        },
    });
    console.log(result);
}

main();