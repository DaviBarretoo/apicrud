//config inicial 

const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()


//forma de ler JSON / middlewares  recursos que são executados  entre nossas requisições e respostas.

app.use( // Para iniciar
    express.urlencoded({
        extended:true
    })
)

//Para finalizar 

app.use(express.json())



//rota inicial / endpoint
app.get('/',(req,res)=>{
    //mostrar req

    res.json({
        message: 'Oi Express!'
    })
})


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.eljandh.mongodb.net/bancodaapi?retryWrites=true&w=majority&appName=ApiCluster`).then(
    ()=> {
console.log("conectamos ao MongoDB!")
app.listen(3002)

    }
).catch((err)=> console.log(err))
//entregar uma porta

