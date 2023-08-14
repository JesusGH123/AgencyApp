let mysql = require('mysql')
let config = require('../helpers/config')  //Importamos la configuracion de la conexion
let conexion = mysql.createConnection(config)   //Le enviamos la configuracion del archivo config.js

module.exports.car_list = (request, response) => {  //Lo mismo que declarar una funcion normal pero se guarda en variable
    
    let sql = 'SELECT * FROM cars'
    conexion.query(sql, (error, results, fields) =>{
        if(error){
            response.send(error)        //Los responses terminan la ejecución de un metodo
        }
        response.json(results)
    }) 
}

module.exports.car_element = (request, response) => {  //Metodo para buscar un carro por ID
 
    let sql = 'SELECT * FROM cars WHERE id = ?'
    conexion.query(sql, [request.params.id],(error, results, fields) =>{
        if(error){
            response.send(error)       
        }
        response.json(results[0])
    }) 
}

module.exports.car_update = (request, response) => {
    let car = request.body
    let sql = `UPDATE cars SET ? WHERE id = ?`
    // model = 'Tsuru' , 
    conexion.query(sql, [car, request.params.id], (error, results, fields) =>{
        if(error){
            response.send(error)        //Los responses terminan la ejecución de un metodo
        }
        response.json(results)
    }) 
}

module.exports.car_save = (request, response) => {
    let car = request.body  //Al recibir request.body recibiria un texto que hay que convertir a objeto (lo hace el body parser)
    let sql = 'INSERT INTO cars SET ?'
    conexion.query(sql, [car], (error, results, fields) => {
        if(error){
            response.send(error)       
        }
        response.json(results[0])
    })
}

module.exports.car_delete = (request, response) => {
    let sql = `DELETE FROM cars WHERE id = ?`
    conexion.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error)       
        }
        response.json(results[0])
    })
}