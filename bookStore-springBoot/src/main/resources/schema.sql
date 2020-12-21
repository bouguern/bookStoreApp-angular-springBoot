DROP TABLE IF EXISTS `category`, `book`, `country`;

-- create category table category
CREATE TABLE IF NOT EXISTS `bookStore`.`category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category_name` VARCHAR(255) NULL DEFAULT NULL);

-- create book table book
CREATE TABLE IF NOT EXISTS `bookStore`.`book` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME DEFAULT NULL,
  `last_updated` DATETIME DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);

SET foreign_key_checks = 0;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` smallint unsigned NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;