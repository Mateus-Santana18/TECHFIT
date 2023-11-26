import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient({
    log: ["query", "info", "warn"],
});

const app = express();

app.use(express.json());

app.get('/login', async (req, res) => {    
    try {
        const { email, senha } = req.body;

        const result = await prisma.usuarios.findFirst({
            where: {
                email: email,
                senha: senha,
            },
        });

        if (!result) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }

        res.status(200)
    
    } catch (error) {
        res.status(500).send(error?.message);
    }
});

app.post('/users', async (req, res) => {
    const user = req.body;

    try {
        const result = await prisma.usuarios.create({
            data: {
                nome: user.nome,
                senha: user.senha,
                email: user.email,
                altura: parseFloat(user.altura),
                peso: parseFloat(user.peso),
                estilo_treino: user.estiloTreino,
            },
        });
    
        res.status(201).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error?.message);
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;

        const result = await prisma.usuarios.update({
            where: {
                id: parseInt(id),
            },
            data: {
                nome: user.nome,
                senha: user.senha,
                altura: user.altura,
                peso: user.peso,
                estiloTreino: user.estiloTreino,
            },
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error?.message);
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        await prisma.usuarios.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.status(204).send();
    } catch (error) {
        res.status(500).send(error?.message);
    }
});

const port = 3333;

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});