const express = require("../node_modules/express")
const app = express()
app.use(express.static(__dirname+"paginas/Htmls/"))
const handlebars = require('../node_modules/express-handlebars')
const path = require('path')
//template engine
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')
//Bootstrap
app.use(express.static(path.join("public")))
//Rotas
app.get("/",function(req,resp){
resp.render('layouts/main')
})
app.get("/home",function(req,resp){
    resp.render('home')
})
//Exemplo de parametro
app.get('/teste/:nome',function(req,resp){
resp.send("Teste do parametro "+req.params.nome)
})


//deixar a linha abaixo no final do codigo
app.listen(8081,function(){
    console.log("Servidor conectado na url http://localhost:8081")
})