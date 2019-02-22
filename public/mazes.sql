-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2019 at 08:16 PM
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
  `maze` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mazes`
--

INSERT INTO `mazes` (`id`, `x`, `y`, `name`, `maze`) VALUES
(1, 10, 10, 'classic', '[["lb","t","tr","t","tb","tr","t","tb","tb","trb"],["lb","rb","r","r","r","r","b","","b","r"],["l","b","rb","r","r","r","","b","rb","r"],["lb","","b","b","rb","r","r","","","rb"],["l","rb","","b","r","r","r","r","b","r"],["l","rb","r","r","r","b","rb","b","r","r"],["lr","","rb","b","b","b","","b","rb","r"],["lr","r","b","","r","b","rb","","r","r"],["lr","b","b","rb","b","b","r","r","r","rb"],["lb","b","b","b","b","rb","b","rb","b","b"]]'),
(2, 4, 4, 'junior', '[\r\n    ["bt", "t", "tbr", "tr"],\r\n    ["trl", "rl", "tbl", "r"],\r\n    ["bl", "b", "bt", "r"],\r\n    ["tl", "tb", "tb", "rb"]\r\n]');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
