let express = require('express')
let router = express.Router()         //Hacer uso del router de express, redirigira las peticiones HTTP

router.get('/', (request, response) => {
    response.send('Inicio')
})

// URL -> Unified resource locator
// URI -> Unique resource identifier

module.exports = router   //Que cosas quiero que se puedan usar fuera de este archivo (como un public)