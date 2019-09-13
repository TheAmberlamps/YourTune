DROP DATABASE IF EXISTS app_db;
CREATE DATABASE app_db;
USE app_db;

CREATE TABLE users (
    userId INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cardNum INT(20) NOT NULL, 
    PRIMARY KEY (userId)
);

CREATE TABLE tracks (
    trackId INT NOT NULL AUTO_INCREMENT,
    trackName VARCHAR (250) NOT NULL,
    trackUrlFull VARCHAR(250) NOT NULL,
    trackUrlPreview VARCHAR(250) NOT NULL,
    userId INT FOREIGN KEY REFERENCES users(userId),
    PRIMARY KEY (trackId)
);

CREATE TABLE purchases (
    id INT NOT NULL AUTO_INCREMENT,
    u_id INT NOT NULL,
    t_id INT NOT NULL,
    uId INT FOREIGN KEY REFERENCES users(userId),
    tId INT FOREIGN KEY REFERENCES tracks(trackId),
    PRIMARY KEY (id)
);