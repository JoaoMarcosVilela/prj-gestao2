// Mockando o FilmeModel diretamente no controlador
const FilmeModel = {
    find: jest.fn().mockResolvedValue([
      { nome: 'Filme 1', _id: '1' },
      { nome: 'Filme 2', _id: '2' }
    ]),
    create: jest.fn().mockResolvedValue({
      nome: 'Filme 3',
      _id: '3'
    })
  };
  
  const filmeController = {
    readAll: async (req, res) => {
      try {
        // Simulando a busca por filmes no banco de dados (mockado)
        const results = await FilmeModel.find();
        res.status(200).send(results);
      } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar filmes' });
      }
    },
  
    create: async (req, res) => {
      try {
        const filme = { nome: req.body.nome };
        const response = await FilmeModel.create(filme);
        res.status(201).json({ response, msg: 'Filme cadastrado!' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao cadastrar filme' });
      }
    }
  };
  
  module.exports = filmeController;
  