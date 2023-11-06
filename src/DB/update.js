import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    
    const result = await prisma.usuarios.update({
        where: {

        },
        data: {

        }
    });


    console.log(result);
}

main();