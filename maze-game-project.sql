-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2019 at 06:49 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maze-game-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `mazes`
--

CREATE TABLE `mazes` (
  `id` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `name` text NOT NULL,
  `maze` text NOT NULL,
  `initial_position` int(11) NOT NULL,
  `final_position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mazes`
--

INSERT INTO `mazes` (`id`, `x`, `y`, `name`, `maze`, `initial_position`, `final_position`) VALUES
(1, 10, 10, 'master', '[\r\n ["lb","t","tr","t","tb","tr","t","tb","tb","trb"],["lb","rb","r","r","r","r","b","","b","r"],["l","b","rb","r","r","r","","b","rb","r"],["lb","","b","b","rb","r","r","","","rb"],["l","rb","","b","r","r","r","r","b","r"],["l","rb","r","r","r","b","rb","b","r","r"],["lr","","rb","b","b","b","","b","rb","r"],["lr","r","b","","r","b","rb","","r","r"],["lr","b","b","rb","b","b","r","r","r","rb"],["lb","b","b","b","b","rb","b","rb","b","b"]\r\n]', 0, 99),
(2, 4, 4, 'very easy', '[\r\n    ["bt", "t", "tbr", "tr"],\r\n    ["trl", "rl", "tbl", "r"],\r\n    ["bl", "b", "bt", "r"],\r\n    ["tl", "tb", "tb", "rb"]\r\n]', 0, 15),
(3, 5, 5, 'easy', '[\r\n     ["lr", "tb", "tb", "t", "tr"],\r\n     ["lb", "r", "", "br", "r"],\r\n     ["l", "br", "b", "r", "r"],\r\n     ["lr", "", "r", "r", "r"],\r\n     ["lb", "br", "b", "br", "b"]\r\n]', 0, 24),
(4, 6, 6, 'medium', '[\r\n        ["t", "tb", "tb", "t", "tb","tr"],\r\n        ["lb", "b", "br", "r", "r", "r"],\r\n        ["l", "b", "b", "br", "r", "br"],\r\n        ["lb", "b", "b", "r", "", "r"],\r\n        ["l", "b", "b", "br", "r", "r"],\r\n        ["lb", "b", "b", "b", "br", "b"]\r\n   ]', 0, 35),
(5, 7, 7, 'average', '[\r\n   ["t", "tb", "tb", "tb", "tb","tr", "tr"],\r\n   ["lr", "b", "r", "", "r", "b", "r"],\r\n   ["lb", "br", "r", "b", "", "b", "r"],\r\n   ["l", "b", "b", "b", "r", "", "br"],\r\n   ["lr", "", "b", "r", "r", "br", "r"],\r\n   ["lbr", "r", "b", "b", "br", "", "r"],\r\n   ["lb", "b", "b", "b", "b", "br", "b"]\r\n   ]', 0, 48),
(6, 8, 8, 'classic', '[\r\n        ["tr", "t", "t", "t", "t", "t", "t", "ltr"],                                              \r\n        ["lr", "r", "tr", "t", "r", "t", "r", "r"],\r\n        ["lr", "b", "br", "r", "t", "br", "r", "r"],\r\n        ["lb", "r", "", "br", "r", "", "br", "r"],\r\n        ["l", "br", "b", "r", "r", "b", "br", "r"],\r\n        ["lb", "r", "", "br", "r", "", "b", "br"],\r\n        ["l", "br", "r", "", "b", "br", "", "r"],\r\n        ["lb", "b", "br", "b", "b", "b", "br", "b"]\r\n    ]', 0, 63),
(7, 9, 9, 'hard', '[\r\n ["bt", "t", "bt", "tr", "t","tb", "tb", "t", "tbr"],\r\n ["lr", "", "br", "br", "b", "r", "", "b", "br"],\r\n ["lr", "", "b", "", "", "r", "", "b", "r"],\r\n ["lb", "b", "r", "br", "r", "br", "b", "br", "br"],\r\n ["lb", "b", "br", "b", "r", "", "b", "b", "r"],\r\n ["l", "", "", "b", "r", "r", "", "b", "r"],\r\n ["lbr", "r", "br", "b", "br", "r", "b", "r", "r"],\r\n ["lr", "", "b", "", "b", "br", "", "br", "br"],\r\n ["lb", "b", "br", "b", "br", "b", "b", "b", "b"]\r\n]', 0, 80);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mazes`
--
ALTER TABLE `mazes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mazes`
--
ALTER TABLE `mazes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
