// 1. Importaciones

const express = require ("express")

const app = express ()

require ("dotenv").config()

// 2. Middlewares

app.use(express.static('public'))

app.set("views", __dirname + "/views")

app.set("view engine", "hbs")

// 3. Rutas

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/works", (req, res) => {
    res.render("works")
})

app.get("/photoGallery", (req, res) => {
    res.render("photoGallery")
})


// 4. Servidor

app.listen (process.env.PORT, () => {
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
})