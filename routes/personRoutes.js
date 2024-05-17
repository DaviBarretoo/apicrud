const router = require('express').Router()
const Person = require('../models/Person')

router.post('/', async (req,res) => {

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

    module.exports = router