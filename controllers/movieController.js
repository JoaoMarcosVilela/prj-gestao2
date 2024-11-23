// Mockando o FilmeModel diretamente no controlador
const FilmeModel = {
    find: jest.fn().mockResolvedValue([
      { nome: 'Filme 1', _id: '1' },
      { nome: 'Filme 2', _id: '2' }
    ]),
    create: jest.fn().mockResolvedValue({
      nome: 'Filme 3',
      _id: '3'
    }),
    deleteOne: jest.fn().mockImplementation((query) => {
      if (query._id === '1' || query._id === '2') {
        return Promise.resolve({ deletedCount: 1 });
      } else {
        return Promise.resolve({ deletedCount: 0 });
      }
    })
  };
  
  const movieController = {
    readAll: async (req, res) => {
      try {
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
    },

    delete: async (req, res) => {
      try {
        const { id } = req.params;

        const filme = await FilmeModel.deleteOne({ _id: id })

        if (filme.deletedCount === 0) {
          return res.status(404).json({ msg: 'Filme não encontrado' });
        }
        
        res.status(204).json({msg: 'Filme deletado com sucesso!' });

      } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Erro ao deletar filme' });
      }
    }
    
  };
  
  module.exports = movieController;
  