/* '''''''''''''''''''''''''''''''''''''''''''''''''
=============IMPORTANDO AS DEPENDÊNCIAS=============
''''''''''''''''''''''''''''''''''''''''''''''''''''*/
const express = require('express');

//IMPORTANDO AS ROTAS 
const routes = require('./src/routes/web')

/*''''''''''''''''''''''''''''''''''''''''''''''''''
=============CONFIGURAÇÕES DO SERVIDOR=============
''''''''''''''''''''''''''''''''''''''''''''''''''''*/
const app = express()
const port = 3000

// DEFININDO O EJS COM MOTOR DE TEMPLATE PADRÃO.
app.set('view engine' , 'ejs')

//DEFINIR A LOCALIZAÇÃO DA PASTA VIEWS
app.set('views', './src/views')

/*''''''''''''''''''''''''''''''''''''''''''''''''''
=====================ROTAS==========================
''''''''''''''''''''''''''''''''''''''''''''''''''''*/
//UTILIZANDO AS ROTAS DO ARQUIVO web.js
app.use(routes)

/*''''''''''''''''''''''''''''''''''''''''''''''''''
=============ESCUTA AS REQUISIÇÕES HTTP=============
''''''''''''''''''''''''''''''''''''''''''''''''''''*/
app.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`)
})