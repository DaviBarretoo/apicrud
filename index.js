//config inicial 

const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const Person = require('./models/Person')


//forma de ler JSON / middlewares  recursos que são executados  entre nossas requisições e respostas.

app.use( // Para iniciar
    express.urlencoded({
        extended:true
    })
)

//Para finalizar 

app.use(express.json())

// rotas da API
app.post('/person', async (req,res) => {

const {name,salary,approved} = req.body

if(!name){
    res.status(422).json( {error: 'O nome é obrigatorio'})
}


const person = {
    name,
    salary,
    approved
}

//criando bd

try{
// Criando dados
await Person.create(person)

res.status(201).json({message:'Pessoa inserida no sistema com sucesso'})

}catch(error){
    // NÃO É uma boa pratíca de progamação mostrar o erro para o user
    res.status(500).json({error: error})
}

})



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

