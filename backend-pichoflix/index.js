const express = require("express")
const mysql = require("mysql2/promise")
 
const conexao = mysql.createPool({
    database: "pichoflix",
    host:"localhost",
    password:"",
    user:"root"
})
 
const App = express()
 
App.listen(3000)
 
App.get("/filmes", async function(req, res) {
    var filme_procurado = req.query.filme
    console.log(filme_procurado)
 
    var dados = await conexao.query("select * from filmes where titulo =?", [filme_procurado])
    res.json(dados[0])
})