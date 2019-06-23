    
DROP DATABASE IF EXISTS tarotdb;
CREATE DATABASE tarotdb;

USE tarotdb;

CREATE TABLE `cards` (
  `card_name` varchar(255) NOT NULL,
  `name_short` varchar(255) NOT NULL,
  `card_value` int(11) NOT NULL,
  `meaning_up` varchar(255) NOT NULL,
  `meaning_down` varchar(255) NOT NULL,
  `arcana_type` varchar(255) NOT NULL,
  PRIMARY KEY (`card_value`)
);

