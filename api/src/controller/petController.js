

import { inserirPet,removerPet,listarTodosPets, buscarPorId, alterarPet, buscarPorRaca,alterarImagem } from '../repository/petRepository.js'

import multer from 'multer'
import { Router } from 'express'

const server = Router();
const upload = multer({ dest: 'storage/pets'})

//ALTERAR IMAGEM
server.put('/pet/:id/capa', upload.single('pet'), async (req,resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(id, imagem);
        if(resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})

//REMOVERPET
server.delete('/pet/:id', async (req,resp) => {
    try {
        const {id} = req.params;

        const resposta = await removerPet(id);
        if(resposta != 1)
            throw new Error('Pet não pode ser removido');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})

//LISTAR TODOS OS PETS 
server.get('/pet', async (req,resp) => {
    try {
        const resposta = await listarTodosPets();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//POR RACA
server.get('/pet/porRaca', async (req,resp) => {
    try {
        const resposta = await buscarPorRaca(req.query.raca);
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

    //POR ID
server.get('/pet/:id', async (req,resp) => {
    try {
        const resposta = await buscarPorId(req.params.id);
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//inserir PET
server.post('/pet', async (req,resp) => {
    try {
        const novoPet = req.body;

        if(!novoPet.nome)
            throw new Error('Nome do pet é obrigatório!');

        if(!novoPet.raca)
            throw new Error('Raça do animal é obrigatória!');

        if(!novoPet.animal)
            throw new Error('O tipo de animal é obrigatório!');

        if(!novoPet.genero)
            throw new Error('Genero do animal é obrigatório!');

        if(!novoPet.endereco)
            throw new Error('Endereço do animal é obrigatório!');

        if(!novoPet.telefone)
            throw new Error('Telefone é obrigatório!');

        if(!novoPet.usuario)
            throw new Error('Usuário não logado!');
            

        const petInserido = await inserirPet(novoPet);

        resp.send(petInserido);
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})




//alterar PET
server.put('/pet/:id', async (req,resp) => {
    try {
        const id = req.params.id;
        const pet = req.body;

        if(!pet.nome)
            throw new Error('Nome do pet é obrigatório!');

        if(!pet.raca)
            throw new Error('Raça do animal é obrigatória!');

        if(!pet.animal)
            throw new Error('O tipo de animal é obrigatório!');

        if(!pet.genero)
            throw new Error('Genero do animal é obrigatório!');

        if(!pet.endereco)
            throw new Error('Endereço do animal é obrigatório!');

        if(!pet.telefone)
            throw new Error('Telefone é obrigatório!');

        if(!pet.usuario)
            throw new Error('Usuário não logado!');
            

        const petInserido = await alterarPet(id, pet);

        resp.send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})



export default server;