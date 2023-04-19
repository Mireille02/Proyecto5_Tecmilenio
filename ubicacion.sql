CREATE DATABASE registroZona;

USE registroZona;
SHOW DATABASES;

CREATE TABLE ubicacion (
    fecha DATE,
    city VARCHAR(100),
    country_code VARCHAR(100),
	country_name VARCHAR(100),
    ip VARCHAR(250),
    latitude FLOAT(50),
	longitude FLOAT(50),
    region_code VARCHAR(50),
    time_zone VARCHAR(100)
);

describe ubicacion;

select * from ubicacion;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';