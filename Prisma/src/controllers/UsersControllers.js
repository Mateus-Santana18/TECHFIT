const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// class UsersController {
//     async create(request, response) {
//         try {
//             const { name, email, altura, peso } = request.body
//             const user = await prisma.usuarios.create({
//                 data: {
//                     nome : "Mateus",
//                     email: "mateussasasa@gmail.com",
//                     altura: 1.74,
//                     peso: 80,
//                 }
        
//             })
//             response.json(user)
//         } catch (err) {
//             return response.status(409).send()
//         }
//     }
// }
// module.exports = UsersController

let usuarios =
    {
    matricula: 180,
    nome: 'mateus',
    email: 'A',
    senha: 123,
    altura: 123,
    peso: 1,
    estiloTreino: 'PP',
    // treinoSelecionado: treinoPerderPeso
    }


async function create (obj){
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

create (usuarios)