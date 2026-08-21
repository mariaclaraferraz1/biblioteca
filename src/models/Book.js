//Conexão com o banco de dados
const db = require('../config/database.js')

/**
 * Insere um livro na tabela "books"
 * 
 * @param {Object} book - Dados do livro a ser inserido
 * 
 * @returns {Promise<Object>} Resultado da operação: Success em caso de inserção ou erro em caso de falha
 */

function save(book) {
    return db.insert(book).into('books')
    .then( _ => {
        return {
            type: "success",
            msg: "Livro inseridos com sucesso!"
        }
    })
    .catch(erro => {
        return {
            type: "error", msg: "Erro: " + erro }
    })

}//fim do salvar

//Exportando a função save
module.exports = { save }