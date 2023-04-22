const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'registroZona',
})  

conexion.connect((error) =>{
    if (error) {
     console.log('database sin conectar');   
     return
    }
    console.log('conecatdo a la base de datos');
})


module.exports = conexion;