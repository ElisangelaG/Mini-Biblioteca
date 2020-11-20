const express = require("../node_modules/express")
const app = express()
app.use(express.static(__dirname + "paginas/Htmls/"))
const handlebars = require('../node_modules/express-handlebars')
const path = require('path')
    //template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Bootstrap
app.use(express.static(path.join("public")))
    //Rotas
app.get("/", function(req, resp) {
    resp.render('home')
})
app.get("/login", function(req, resp) {
    resp.render('login')
})
app.get("/cadastrousuario", function(req, resp) {
    resp.render('cadastrousuario')
})
app.get("/cadastroTCC", function(req, resp) {
    resp.render('cadastroTCC')
})

app.get("/telausuario", function(req, resp) {
    resp.render('telausuario')
})
app.get("/cadastroArtigo", function(req, resp) {
    resp.render('cadastroArtigo')
})
app.get("/cadastroPi", function(req, resp) {
    resp.render('cadastroPi')
})
app.get("/cadastroPublicacao", function(req, resp) {
    resp.render('cadastroPublicacao')

})

app.get("/visualizarobras", function(req, resp) {
    resp.render('visualizarobras')
})

//Exemplo de parametro
app.get('/teste/:nome', function(req, resp) {
        resp.send("Teste do parametro " + req.params.nome)
    })
    //deixar a linha abaixo no final do codigo
app.listen(8081, function() {
    console.log("Servidor conectado na url http://localhost:8081")
})