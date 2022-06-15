

import { alterarPet, buscarPorRaca, inserirPet,removerPet,consultarTodosPet,consultarTodosUsu } from '../repository/filmeRepository.js'

import multer from 'multer'
import { Router } from 'express'

const server = Router();
const upload = multer({ dest: 'storage/capaFilmes'})

//ALTERAR IMAGEM
server.put('/pet/:id/capa', upload.single('capa'), async (req,resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem,id);
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
        const resposta = await listarTodosPet();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//ALTERAR PET
server.post('/pet', async (req,resp) => {
    try {
        const novoPet = req.body;

        if(!novoPet.nome)
            throw new Error('Nome do pet é obrigatório!');

        if(!novoPet.raca)
            throw new Error('Raça do animal é obrigatória!');

        if(novoPet.animal)
            throw new Error('O tipo de animal é obrigatório!');

        if(!novoPet.genero)
            throw new Error('Genero do animal é obrigatório!');

        if(novoPet.endereço)
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