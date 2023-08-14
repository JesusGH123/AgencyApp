let express = require('express')
let router = express.Router()         //Hacer uso del router de express, redirigira las peticiones HTTP
let eventController = require('../controllers/events.controller')

router.get('/events', eventController.event_list)
router.post('/events', eventController.event_save)
router.put('events/:id', eventController.event_update)
router.delete('events/:id', eventController.event_delete)
router.get('/cars/:id', eventController.event_element)

router.post('/events', (request, response) => {
    response.send('Inicio de API')
})

module.exports = router   //Que cosas quiero que se puedan usar fuera de este archivo (como un public)