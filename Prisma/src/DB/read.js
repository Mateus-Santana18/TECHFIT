import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    const result = await prisma.usuarios.findMany({
        where: {
            name: {
                
            }
        }
    });

    console.log(result);
}

main();