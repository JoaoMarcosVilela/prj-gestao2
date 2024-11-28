const request = require('supertest');
const express = require('express');
const MovieController = require('../controllers/movieController');

const app = express();
app.use(express.json());
app.get('/filmes', MovieController.readAll);
app.post('/filmes', MovieController.create);
app.delete('/filmes/:id', MovieController.delete);

describe('Testar rota GET', () => {
    it('Deve retornar o status 200', async () => {
        const response = await request(app).get('/filmes');
        expect(response.status).toBe(200);
    });
});

describe('Testar a rota POST', () => {
    it('Deve criar um novo filme e retornar com status 201', async () => {
        const response = await request(app)
            .post('/filmes')
            .send({ nome: 'Filme 3' });


        expect(response.status).toBe(201);
        expect(response.body.msg).toBe('Filme cadastrado!');
        expect(response.body.response.nome).toBe('Filme 3');
        expect(response.body.response._id).toBe('3');
    });
});

describe('Testar a rota DELETE', () => {
    // it('Deve deletar um filme e retornar com status 204', async () => {
    //     const response = await request(app).delete('/filmes/1');

    //     expect(response.status).toBe(204);
    // });

    // it('Deve não encontrar o filme e retornar 404', async () => {
    //     const response = await request(app).delete('/filmes/999');

    //     expect(response.status).toBe(404);
    // });
});
