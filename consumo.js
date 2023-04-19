const mysql = require('mysql');
const API_ENDPOINT = "https://api.ipbase.com/v1/json/";

fetch(API_ENDPOINT)
.then(response => response.json())
.then(datosUbicacion => {
  // Imprimir los datos de la ubicación
  console.log(datosUbicacion);
  // Recuerda que podemos acceder a latitude y longitude, entre otros
  const fecha = datosUbicacion.fecha,
    city = datosUbicacion.city,
    country_code = datosUbicacion.country_code,
    country_name = datosUbicacion.country_name,
    ip = datosUbicacion.ip,
    latitude = datosUbicacion.latitude,
    longitude = datosUbicacion.longitude,
    region_code = datosUbicacion.region_code,
    time_zone = datosUbicacion.time_zone;
    
  console.log(`Tus coordenadas son:  ${fecha},${city},${country_code},${country_name},${ip},${latitude},${longitude},${region_code},${time_zone}`);


  // Crea una conexión a la base de datos
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'registroZona'
  });
  
  // Conecta a la base de datos
  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos: ' + error.stack);
      return;
    }
    console.log('Conectado a la base de datos con ID: ' + connection.threadId);
  
    //Consultas
    //let query = "SELECT MIN(Anio_De_Publicacion) from Discos";
    //let query ='select * from discos where anio_de_publicacion = (select min(anio_de_publicacion from discos)';
  });
  
  // Realiza una consulta a la base de datos
  connection.query('SELECT * FROM ubicacion', (error, results, fields) => {
    if (error) throw error;
    console.log('Los resultados de la consulta son: ', results);
  });
  
  /* Cierra la conexión a la base de datos cuando haya terminado de usarla
  connection.end((error) => {
    if (error) {
      console.error('Error al cerrar la conexión a la base de datos: ' + error.stack);
      return;
    }
    console.log('Conexión a la base de datos cerrada.');*/
  
    
sql = `insert into ubicacion (fecha,city,country_code,country_name,ip,latitude,longitude,region_code,time_zone) values (${fecha},${city},${country_code},${country_name},${ip},${latitude},${longitude},${region_code},${time_zone} timestap)`
    

  });
 
//});