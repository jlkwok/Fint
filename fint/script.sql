INSERT INTO fint.user (name, password, username, location) VALUES ('Kyle the Seller', 'KylePassword', 'KyleUsername', 'Ann Arbor, MI');
INSERT INTO fint.user (name, password, username, location) VALUES ('Jason the Reviewer', 'JasonPassword', 'JasonUsername', 'Cleveland, OH');
INSERT INTO fint.user (name, password, username, location) VALUES ('Jess the Reviewer', 'JessPassword', 'JessUsername', 'Akron, OH');
INSERT INTO fint.user (name, password, username, location) VALUES ('Tristan', 'TristanPassword', 'TristanUsername', 'Seattle, WA');
INSERT INTO fint.user (name, password, username, location) VALUES ('Jasper', 'JasperPassword', 'JasperUsername', 'Redmond, WA');
INSERT INTO fint.user (name, password, username, location) VALUES ('Matthew', 'MatthewPassword', 'MatthewUsername', 'Saline, MI');
INSERT INTO fint.user (name, password, username, location) VALUES ('Louie', 'LouiePassword', 'LouieUsername', 'New York, NY');

INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Tuxedo', 20, 'tuxedo.png', 3, true, 'Cleveland, OH', 1);
<<<<<<< HEAD
INSERT INTO fint.user (name, password, username) VALUES ('Kyle the Seller', 'KylePassword', 'KyleUsername');
INSERT INTO fint.user (name, password, username) VALUES ('Jason the Reviewer', 'JasonPassword', 'JasonUsername');
INSERT INTO fint.user (name, password, username) VALUES ('Jess the Reviewer', 'JessPassword', 'JessUsername');
INSERT INTO fint.item_review (reviewed_id, reviewer_id, description, rating, post_date) VALUES (1, 2, 'This tuxedo is awesome', 4, '7 11 2019');
INSERT INTO fint.item_review (reviewed_id, reviewer_id, description, rating, post_date) VALUES (1, 3, 'This tuxedo is terrible', 1, '7 11 2019');
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Car', 300, 'car.png', 120, true, 'Akron, OH', 4);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Basketball', 5, 'bball.png', 15, true, 'Seattle, WA', 5);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Grill', 10, 'grill.png', 13, true, 'Redmond, WA', 6);
INSERT INTO fint.user (name, password, username) VALUES ('Tristan', 'TristanPassword', 'TristanUsername');
INSERT INTO fint.user (name, password, username) VALUES ('Jasper', 'JasperPassword', 'JasperUsername');
INSERT INTO fint.user (name, password, username) VALUES ('Matthew', 'MatthewPassword', 'MatthewUsername');
INSERT INTO fint.user (name, password, username) VALUES ('Louie', 'LouiePassword', 'LouieUsername');
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Tractor', 276, 'tractor.png', 1, true, 'Saline, MI', 7);
INSERT INTO fint.cart_item (item_id, fintee_id, start_date, end_date, price) VALUES (1, 1, '7 11 2019', '11 14 2019');
INSERT INTO fint.Transaction (item_id, is_returned, fintee_id, start_date, end_date, t_price) VALUES (1, true, 2, '1 12 2019', '7 12 2019', 100);
=======
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Car', 300, 'car.png', 120, true, 'Akron, OH', 4);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Basketball', 5, 'bball.png', 15, true, 'Seattle, WA', 5);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Grill', 10, 'grill.png', 13, true, 'Redmond, WA', 6);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Tractor', 276, 'tractor.png', 1, true, 'Saline, MI', 7);

INSERT INTO fint.item_review (reviewed_id, reviewer_id, description, rating, post_date) VALUES (1, 2, 'This tuxedo is awesome', 4, '2019-11-07T16:24:29.000');
INSERT INTO fint.item_review (reviewed_id, reviewer_id, description, rating, post_date) VALUES (1, 3, 'This tuxedo is terrible', 1, '2019-11-07T16:24:29.000');
>>>>>>> 74d249f84c6eb166b65f0db024f20140df8f91bd
