import Express from "express";

import { PrismaClient } from "@prisma/client";
// const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = Express()


// let usuarios =
//     {
//     matricula: 180,
//     nome: 'mateus',
//     email: 'A',
//     senha: 123,
//     altura: 123,
//     peso: 1,
//     estiloTreino: 'PP',
//     // treinoSelecionado: treinoPerderPeso
//     }
async function cadastro (obj){
    const user = await prisma.usuarios.create({
        data: {
            nome : obj.nome,
            email: obj.email,
            altura: obj.altura,
            peso: obj.peso,
        }

    })
    console.log(user)

}
cadastro(usuarios)


app.get("/users", async (req,res)=>{
 
res.status(200).send(result)

})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))