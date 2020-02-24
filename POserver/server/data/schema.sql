
DROP DATABASE IF EXISTS example;


create database example;

\c example;


CREATE TABLE product (id SERIAL PRIMARY KEY,
                                        name TEXT, slogan TEXT, description TEXT, category TEXT NOT NULL,
                                                                                                default_price INTEGER);


CREATE TABLE styles (style_id SERIAL PRIMARY KEY,
                                             product_Id INTEGER, name TEXT, sale_price TEXT, original_price INTEGER, default_style INTEGER,
                     FOREIGN KEY (product_Id) REFERENCES product (id));


CREATE TABLE features (id SERIAL PRIMARY KEY,
                                         style_id INTEGER, feature TEXT, value TEXT,
                       FOREIGN KEY (style_id) REFERENCES styles (style_id));


CREATE TABLE skus (id SERIAL PRIMARY KEY,
                                     style_id INTEGER, size TEXT, quantity INTEGER,
                   FOREIGN KEY (style_id) REFERENCES styles (style_id));


CREATE TABLE photos (id SERIAL PRIMARY KEY,
                                       style_id INTEGER, url TEXT, thumbnail_url TEXT,
                     FOREIGN KEY (style_id) REFERENCES styles (style_id));

COPY product
FROM '/Users/robgonzalez-pita/Desktop/UglyDog/POserver/server/data/dummyData/product.csv'
DELIMITER ',' CSV HEADER;

COPY styles
FROM '/Users/robgonzalez-pita/Desktop/UglyDog/POserver/server/data/dummyData/styles.csv'
DELIMITER ',' CSV HEADER;

COPY features
FROM '/Users/robgonzalez-pita/Desktop/UglyDog/POserver/server/data/dummyData/features.csv'
DELIMITER ',' NULL AS 'null' CSV HEADER;

COPY skus
FROM '/Users/robgonzalez-pita/Desktop/UglyDog/POserver/server/data/dummyData/skus.csv'
DELIMITER ',' CSV HEADER;

COPY photos
FROM '/Users/robgonzalez-pita/Desktop/UglyDog/POserver/server/data/dummyData/photos.csv'
DELIMITER ',' CSV HEADER;

COPY samplephotos
FROM '/Users/robgonzalez-pita/Desktop/CSVFILES/photos.csv'
DELIMITER ',' CSV HEADER;