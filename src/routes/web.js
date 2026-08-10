// IMPORTA O MÓDULO ROUTER DO EXPRESS
const router = require('express').Router()

//ROTAS
//GET    /books               => Listar todos os livros
//GET    /books/new           => Exibir o form
//POST   /books/new           => Cadastrar o livro
//GET    /books/:id           => Exibir o livro
//POST   /books/edit/:id      => Editar o livro
//POST   /books/delete/:id    => Excluir o livro

router.get('/', (req, res) => {
    res.render('pages/home')
  })
  
  router.get('/books/new', (req, res) => {
    res.render('pages/book_form')
  })

//EXPORTA AS ROTAS PARA OUTRO ARQUIVO
module.exports = router