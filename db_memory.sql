-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 15 Nov 2021 pada 15.35
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_memory`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `memory`
--

CREATE TABLE `memory` (
  `id_memory` varchar(10) NOT NULL,
  `title_memory` varchar(250) NOT NULL,
  `type_memory` varchar(50) NOT NULL,
  `lat_location` decimal(11,8) NOT NULL,
  `lng_location` decimal(11,8) NOT NULL,
  `image_memory` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `memory`
--

INSERT INTO `memory` (`id_memory`, `title_memory`, `type_memory`, `lat_location`, `lng_location`, `image_memory`) VALUES
('1', 'test', 'good', '-51.65460000', '43.15150000', 'images/wrench.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `memory`
--
ALTER TABLE `memory`
  ADD PRIMARY KEY (`id_memory`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
