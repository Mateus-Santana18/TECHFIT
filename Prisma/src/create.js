import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
    log: ["query", "info", "warn"],
});

async function main(){
    const result = await prisma.usuarios.create({ 
        data: {
            nome: "João",
            email: "joao@gmail.com",   
            altura: 1.75,
            peso: 80,

        },
    });
    console.log(result);
}

main();