const request = require('supertest');
const express = require('express');
const MovieController = require('../controllers/movieController');  // Ajuste o caminho do controller

// Criando a aplicação Express
const app = express();
app.use(express.json());
app.get('/filmes', MovieController.readAll);  // Rota que chama o controller
app.post('/filmes', MovieController.create);  // Rota para criar filme

describe('GET /filmes', () => {
  it('deve retornar todos os filmes com status 200', async () => {
    const response = await request(app).get('/filmes');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { nome: 'Filme 1', _id: '1' },
      { nome: 'Filme 2', _id: '2' }
    ]);
  });
});

describe('POST /filmes', () => {
  it('deve criar um novo filme e retornar com status 201', async () => {
    const response = await request(app)
      .post('/filmes')
      .send({ nome: 'Filme 3' });

    expect(response.status).toBe(201);
    expect(response.body.msg).toBe('Filme cadastrado!');
    expect(response.body.response.nome).toBe('Filme 3');
    expect(response.body.response._id).toBe('3');
  });
});
