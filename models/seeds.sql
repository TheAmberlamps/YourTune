USE app_db;

INSERT INTO users (user_name, pass, email, card_num) VALUES ("Paul", "Paulpass", "unsted.paul@gmail.com", 123456789);
INSERT INTO users (user_name, pass, email, card_num) VALUES ("Testboi", "Testpass", "boi.test@gmail.com", 987654321);
INSERT INTO users (user_name, pass, email, card_num) VALUES ("Boitest", "Passtest", "test.boi@gmail.com", 000000000);

INSERT INTO tracks (track_name, track_url_full, track_url_preview, u_id) VALUES ("dummyname", "dummyurl_full", "dummyurl_prev", 1);

INSERT INTO purchases (u_id, t_id) VALUES (1, 1);