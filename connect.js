const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'registroZona'
})

// *message error
connection.connect((error) => {
  if (error) throw error
  console.log('Connected!')
})

// *query select 
const select = 'SELECT * FROM ubicacion';

connection.query(select, (error, rows) => {
  if (error) {
    throw error
  }
  console.log(rows)
})

// *query insert 

const insert = "INSERT INTO ubicacion (fecha,city,country_code,country_name,ip,latitude,longitude,region_code,time_zone) VALUES ('ubicacion')"
//`insert into ubicacion (fecha,city,country_code,country_name,ip,latitude,longitude,region_code,time_zone) values (${fecha},${city},${country_code},${country_name},${ip},${latitude},${longitude},${region_code},${time_zone} timestap)`;

connection.query(insert, (error, response) => {
  if (error){
    throw error
  } 
  console.log(`Dato registrado, ${response}`)
  // console.log('', res.)
})

connection.query(select, (error, rows) => {
  if (error) {
    throw error
  }
  console.log(rows)
})

// connection.end()




$(document).ready(function () {
  
  function refresh() { 
    
  }

console.log(refresh());


axios.get('https://api.ipbase.com/v1/json/')
.then(function (response) {
  console.log(response);
  
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
});


});

