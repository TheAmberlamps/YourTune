USE app_db;

INSERT INTO users (username, pass, email, card, createdAt, updatedAt) VALUES ("Paul", "Paulpass", "unsted.paul@gmail.com", 123456789, 1, 1);
INSERT INTO users (username, pass, email, card, createdAt, updatedAt) VALUES ("Testboi", "Testpass", "boi.test@gmail.com", 987654321, 2, 2);
INSERT INTO users (username, pass, email, card, createdAt, updatedAt) VALUES ("Boitest", "Passtest", "test.boi@gmail.com", 000000000, 3, 3);

INSERT INTO tracks (title, download, preview, user, createdAt, updatedAt) VALUES ("dummyname", "dummyurl_full", "dummyurl_prev", 1, 1, 1);

INSERT INTO purchases (user, track, createdAt, updatedAt) VALUES (1, 1, 1, 1);