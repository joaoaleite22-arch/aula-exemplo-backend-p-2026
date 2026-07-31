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

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
}) 