//config inicial 

const express = require('express')
const app = express()

//forma de ler JSON / middlewares  recursos que são executados  entre nossas requisições e respostas.

app.use( // Para iniciar
    express.urlencoded({
        extended:true
    })
)

//Para finalizar 

app.use(express.json())



//rota inicial / endpoint


//entregar uma porta

app.listen(3000) // disponibilizar na porta 3000