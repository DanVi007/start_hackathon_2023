-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 28, 2023 at 10:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `start-hackathon-2023`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` blob DEFAULT NULL,
  `quantity_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `image`, `quantity_type`) VALUES
(1, 'Flour', NULL, 'grams'),
(2, 'Eggs', NULL, 'pieces'),
(3, 'Milk', NULL, 'milliliters'),
(4, 'Sugar', NULL, 'grams');

-- --------------------------------------------------------

--
-- Table structure for table `ingredients_in_recipe`
--

CREATE TABLE `ingredients_in_recipe` (
  `ingredient` int(11) NOT NULL,
  `recipe` int(11) NOT NULL,
  `quantity` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Dumping data for table `ingredients_in_recipe`
--

INSERT INTO `ingredients_in_recipe` (`ingredient`, `recipe`, `quantity`) VALUES
(1, 1, 200),
(1, 3, 150),
(2, 1, 2),
(3, 1, 300),
(4, 3, 250);

-- --------------------------------------------------------

--
-- Table structure for table `ingredients_in_storage`
--

CREATE TABLE `ingredients_in_storage` (
  `user_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `storage_type` varchar(255) NOT NULL,
  `quantity` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Dumping data for table `ingredients_in_storage`
--

INSERT INTO `ingredients_in_storage` (`user_id`, `ingredient_id`, `storage_type`, `quantity`) VALUES
(1, 1, 'Pantry', 1000),
(1, 2, 'Refrigerator', 12),
(1, 3, 'Freezer', 500);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mealTime` varchar(255) DEFAULT NULL,
  `information` varchar(255) DEFAULT NULL,
  `image` blob DEFAULT NULL,
  `time_it_takes` int(11) DEFAULT NULL,
  `roasting_time` int(11) DEFAULT NULL,
  `rest_time` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `difficulty` ENUM('low', 'medium', 'hard') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `mealTime`, `information`, `image`) VALUES
(1, 'Pancakes', 'Breakfast', 'Delicious pancakes for breakfast', NULL),
(2, 'Spaghetti Bolognese', 'Dinner', 'Classic Italian dish', NULL),
(3, 'Chocolate Cake', 'Dessert', 'Indulgent chocolate cake', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`) VALUES
(1, 'Bobby', 'Tables'),
(2, 'peter', 'file');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients_in_recipe`
--
ALTER TABLE `ingredients_in_recipe`
  ADD PRIMARY KEY (`ingredient`,`recipe`),
  ADD KEY `recipe` (`recipe`);

--
-- Indexes for table `ingredients_in_storage`
--
ALTER TABLE `ingredients_in_storage`
  ADD PRIMARY KEY (`user_id`,`ingredient_id`,`storage_type`),
  ADD KEY `ingredient_id` (`ingredient_id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ingredients_in_recipe`
--
ALTER TABLE `ingredients_in_recipe`
  ADD CONSTRAINT `ingredients_in_recipe_ibfk_1` FOREIGN KEY (`ingredient`) REFERENCES `ingredients` (`id`),
  ADD CONSTRAINT `ingredients_in_recipe_ibfk_2` FOREIGN KEY (`recipe`) REFERENCES `recipes` (`id`);

--
-- Constraints for table `ingredients_in_storage`
--
ALTER TABLE `ingredients_in_storage`
  ADD CONSTRAINT `ingredients_in_storage_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ingredients_in_storage_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
