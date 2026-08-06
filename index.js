import express from 'express' //TYPE MODULE
//const express = require("express") //TYPE COMMON JS

// inicializando o express = new
const app = express()

app.get("/api/somar", (req, res) => {
    // const exemplo = 0
    // let aletarada = 0 
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({message: num1 + num2 })
    
})


//Exercício 02
//http://localhost:3000/api/salario/2/3

app.get("/api/salario/:valor/:hora", (req, res) => {
    const ValorGanho = Number(req.params.valor)
    const horasTrabalhadas = Number(req.params.hora)

    const resultado = ValorGanho * horasTrabalhadas
    res.send({message: resultado})
} )


//Exercício 03
//http://localhost:3000/api/pesoMedio?peso1=10&peso2=20&peso3=30&peso4=40&peso5=50

app.get("/api/pesoMedio", (req, res) => {
    const peso1 = Number(req.query.peso1)
    const peso2 = Number(req.query.peso2)
    const peso3 = Number(req.query.peso3)
    const peso4 = Number(req.query.peso4)
    const peso5 = Number(req.query.peso5)

    const resultado = (peso1+peso2+peso3+peso4+peso5)/5
    res.send({message: resultado})
})

//Exercício 04
//http://localhost:3000/api/temperatura/10

app.get("/api/temperatura/:celsius", (req, res) => {
    const celsius = Number(req.params.fahrenheit)

    const resultado = (9 * celsius + 160) / 5
    res.send({message: resultado})
})

//Exercício 05
//http://localhost:3000/api/distancia?quilometro=10

app.get("/api/distancia", (req, res) => {
    const milhas = Number(req.query.milhas)

    const resultado = (milhas * 1.60934)
    res.send({message: resultado})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
}) 