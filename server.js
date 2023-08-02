const express = require("express")
const app = express()

app.listen(3000, function(){
console.log("Rodando a no server 3000")
})
console.log("Bem vindo ao server")

app.get("/ler", (req, res) => {
res.send("Olá")
})