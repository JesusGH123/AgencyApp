let mysql = require('mysql')
let config = require('../helpers/config')  //Importamos la configuracion de la conexion
let conexion = mysql.createConnection(config)   //Le enviamos la configuracion del archivo config.js

module.exports.event_list = (request, response) => {  //Lo mismo que declarar una funcion normal pero se guarda en variable
    let sql = 'SELECT * FROM eventos'
    conexion.query(sql, (error, results, fields) =>{
        if(error){
            response.send(error)        //Los responses terminan la ejecución de un metodo
        }
        response.json(results)
    }) 
}

module.exports.event_element = (request, response) => {  //Metodo para buscar un carro por ID
 
    let sql = 'SELECT * FROM eventos WHERE id = ?'
    conexion.query(sql, [request.params.id],(error, results, fields) =>{
        if(error){
            response.send(error)       
        }
        response.json(results[0])
    }) 
}

module.exports.event_update = (request, response) => {
    let evento = request.body
    let sql = `UPDATE eventos SET ? WHERE id = ?`
    
    conexion.query(sql, [evento, request.params.id], (error, results, fields) =>{
        if(error){
            response.send(error)        //Los responses terminan la ejecución de un metodo
        }
        response.json(results)
    }) 
}

module.exports.event_save = (request, response) => {
    let evento = request.body  //Al recibir request.body recibiria un texto que hay que convertir a objeto (lo hace el body parser)
    let sql = 'INSERT INTO eventos SET ?'
    conexion.query(sql, [evento], (error, results, fields) => {
        if(error){
            response.send(error)       
        }
        response.json(results[0])
    })
}

module.exports.event_delete = (request, response) => {
    let sql = `DELETE FROM eventos WHERE id = ?`
    conexion.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error)       
        }
        response.json(results[0])
    })
}