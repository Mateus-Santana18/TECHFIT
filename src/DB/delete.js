import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    
    const result = await prisma.usuarios.delete({
        where: {
            
        },

    });


    console.log(result);
}

main();