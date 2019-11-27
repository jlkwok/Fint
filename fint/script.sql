INSERT INTO fint.user (name, password, username, location) VALUES ('Kyle the Seller', 'KylePassword', 'KyleUsername', 'Ann Arbor, MI');
INSERT INTO fint.user (name, password, username, location) VALUES ('Jason the Reviewer', 'JasonPassword', 'JasonUsername', 'Cleveland, OH');
INSERT INTO fint.user (name, password, username, location) VALUES ('Jess the Reviewer', 'JessPassword', 'JessUsername', 'Akron, OH');
INSERT INTO fint.user (name, password, username, location) VALUES ('Tristan', 'TristanPassword', 'TristanUsername', 'Seattle, WA');
INSERT INTO fint.user (name, password, username, location) VALUES ('Jasper', 'JasperPassword', 'JasperUsername', 'Redmond, WA');
INSERT INTO fint.user (name, password, username, location) VALUES ('Matthew', 'MatthewPassword', 'MatthewUsername', 'Saline, MI');
INSERT INTO fint.user (name, password, username, location) VALUES ('Louie', 'LouiePassword', 'LouieUsername', 'New York, NY');

INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Tuxedo', 20, 'tuxedo.png', 3, true, 'Cleveland, OH', 1);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Car', 300, 'car.png', 120, false, 'Akron, OH', 4);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Basketball', 5, 'bball.png', 15, true, 'Seattle, WA', 5);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Grill', 10, 'grill.png', 13, true, 'Redmond, WA', 6);
INSERT INTO fint.item (name, price, picture, fint_count, is_available, location, finter_id) VALUES ('Tractor', 276, 'tractor.png', 1, true, 'Saline, MI', 7);

INSERT INTO fint.item_review (reviewed_id, reviewer_id, description, rating, post_date) VALUES (1, 2, 'This tuxedo is awesome', 4, '11-7-2019');
INSERT INTO fint.item_review (reviewed_id, reviewer_id, description, rating, post_date) VALUES (1, 3, 'This tuxedo is terrible', 1, '11-7-2019');
INSERT INTO fint.transaction (item_id, is_returned, fintee_id, start_date, end_date, t_price) VALUES (1, true, 2, '12-1-2019', '12-7-2019', 100);
INSERT INTO fint.transaction (item_id, is_returned, fintee_id, start_date, end_date, t_price) VALUES (2, false, 1, '12-1-2019', '12-7-2019', 100);
INSERT INTO fint.cart_item (item_id, fintee_id, start_date, end_date, price) VALUES (1, 1, '11-7-2019', '11-14-2019', 100);
INSERT INTO fint.cart_item (item_id, fintee_id, start_date, end_date, price) VALUES (2, 1, '11-7-2019', '11-14-2019', 50);