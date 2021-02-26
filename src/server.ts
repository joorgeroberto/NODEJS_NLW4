import express, { response } from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar todas as informações de um objeto
 * DELETE => Deletar
 * PATCH => Alteração específica em um objeto. (Ex: Alterar uma imagem)
*/

// Retorna em: localhost:3333/users
app.get('/', (request, response) => {
  //return response.send('Hello World - NLW04')
  return response.json({ message: 'Hello World - NLW04' })
});

// 1 param => Rota(Recurso API)
// 2 param => request.response
app.post('/', (request, response) => {
  // Recebeu dados para salvar
  return response.json({ message: 'Os dados foram salvos com sucesso!' })
});

app.listen(3333, () => console.log('Server is running!'));