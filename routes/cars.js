let express = require('express')
let router = express.Router()         //Hacer uso del router de express, redirigira las peticiones HTTP
//let carController = require('../controllers/cars.controller')
let eventController = require('../controllers/events.controller')

router.get('/cars', carController.car_list)
router.post('/cars', carController.car_save)
router.put('/cars/:id', carController.car_update)
router.delete('/cars/:id', carController.car_delete)
router.get('/cars/:id', carController.car_element)  //Para buscar un id en especifico

router.post('/events', (request, response) => {
    response.send('Inicio de API')
})

module.exports = router   //Que cosas quiero que se puedan usar fuera de este archivo (como un public)