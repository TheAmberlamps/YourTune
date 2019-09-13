DROP DATABASE IF EXISTS app_db;
CREATE DATABASE app_db;
USE app_db;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    card_num VARCHAR(20) NOT NULL,
    purchases VARCHAR(50),
    PRIMARY KEY (user_id)
);

CREATE TABLE tracks (
    track_id INT NOT NULL AUTO_INCREMENT,
    track_name VARCHAR (250) NOT NULL,
    track_url_full VARCHAR(250) NOT NULL,
    track_url_preview VARCHAR(250) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    PRIMARY KEY (track_id)

);

CREATE TABLE purchases (
    id INT NOT NULL AUTO_INCREMENT,
    u_id INT NOT NULL,
    t_id INT NOT NULL,
    FOREIGN KEY (t_id) REFERENCES tracks(track_id),
    FOREIGN KEY (u_id) REFERENCES users(user_id),
    PRIMARY KEY (id)
);