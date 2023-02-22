DROP DATABASE IF EXISTS fotosDB;
CREATE DATABASE fotosDB CHARSET utf8mb4;
USE fotosDB;

CREATE TABLE fotos(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(400) NOT NULL,
    descrip VARCHAR(255) NOT NULL,
    titulo VARCHAR(120) NOT NULL,
    fecha VARCHAR(100) NOT NULL,
    likes int default 0,
    dislikes int default 0
);
