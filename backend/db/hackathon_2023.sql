CREATE TABLE `ingredients` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `image` blob,
  `quantity_type` varchar(255)
);

CREATE TABLE `ingredients_in_storage` (
  `user_id` integer,
  `ingredient_id` integer,
  `storage_type` varchar(255),
  `quantity` double,
  PRIMARY KEY (`user_id`, `ingredient_id`, `storage_type`)
);

CREATE TABLE `recipes` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `mealTime` varchar(255),
  `information` varchar(255),
  `image` blob
);

CREATE TABLE `ingredients_in_recipe` (
  `ingredient` integer,
  `recipe` integer,
  `quantity` double,
  PRIMARY KEY (`ingredient`, `recipe`)
);

CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255)
);

ALTER TABLE `ingredients_in_storage` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `ingredients_in_storage` ADD FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`);

ALTER TABLE `ingredients_in_recipe` ADD FOREIGN KEY (`ingredient`) REFERENCES `ingredients` (`id`);

ALTER TABLE `ingredients_in_recipe` ADD FOREIGN KEY (`recipe`) REFERENCES `recipes` (`id`);

