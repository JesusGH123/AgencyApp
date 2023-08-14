let express = require ('express')   //Express nos permite dar la estructura a las aplicaciones que creamos en el backend
let path = require('path')         //Generas las rutas para nuestro servicio web
let bodyParser = require('body-parser')  //Entender que el formato JSON lo podemos manipular como objeto (casting str a JSON)

let port = 3000
let app = express() //Esta variable hace referencia a la app

let index = require('./routes/index')   //Traemos los archivos que vamos a usar cuando hagamos el app.use
let cars = require('./routes/events')
let events = require('./routes/events')

app.use(bodyParser.json())  //La app podra usar bodyparser, en especifico el casting de String a JSON
app.use(bodyParser.urlencoded({extended: false})) //Hace conversion de caracteres

app.use('/', index)     //Raíz (si se va a la raiz se envia a index.js)
app.use('/api', events)   //Nos envia a cars cuando se hace raiz/api

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto ${port}`)
})

//HTTP
// GET: Seleccionar/devolver informacion
// POST: Guardar informacion
// PUT: Actualizar informacion
// DELETE: Borrar informacion