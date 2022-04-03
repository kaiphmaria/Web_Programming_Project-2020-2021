-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 10, 2021 at 05:49 PM
-- Server version: 8.0.22-0ubuntu0.20.04.3
-- PHP Version: 7.4.3
-- 
-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- SET AUTOCOMMIT = 0;
-- START TRANSACTION;
-- SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_db20_up1059386`
--

-- --------------------------------------------------------

--
-- Table structure for table `AFORA`
--

CREATE TABLE `AFORA` (
  `ar_krathshs` int NOT NULL,
  `typos_oxhmatos` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `AFORA`
--

INSERT INTO `AFORA` (`ar_krathshs`, `typos_oxhmatos`) VALUES
(31, 'OFF ROAD'),
(30, 'SUV'),
(27, 'ΜΕΣΑΙΑ'),
(28, 'ΜΕΣΑΙΑ'),
(29, 'ΜΕΣΑΙΑ'),
(33, 'ΜΕΣΑΙΑ'),
(32, 'ΠΟΛΥΤΕΛΗ');

-- --------------------------------------------------------

--
-- Table structure for table `AFORA_SYGKEKRIMENA`
--

CREATE TABLE `AFORA_SYGKEKRIMENA` (
  `ar_krathshs` int NOT NULL,
  `ar_pinakidas` varchar(9) NOT NULL,
  `im_pragm_paralavhs` datetime DEFAULT NULL,
  `im_pragm_epistrofhs` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `AFORA_SYGKEKRIMENA`
--

INSERT INTO `AFORA_SYGKEKRIMENA` (`ar_krathshs`, `ar_pinakidas`, `im_pragm_paralavhs`, `im_pragm_epistrofhs`) VALUES
(27, 'ΒΤ5689', '2021-01-18 00:00:00', NULL),
(28, 'GT6543', '2021-01-01 00:00:00', '2021-01-04 00:00:00'),
(29, 'ΒΤ5689', '2021-01-03 00:00:00', '2021-01-07 00:00:00'),
(30, 'HT6798', '2021-01-01 00:00:00', '2021-01-08 00:00:00'),
(31, 'RT8734', '2021-01-10 00:00:00', NULL),
(32, 'AR6456', '2021-01-09 00:00:00', NULL),
(33, 'ΒΤ5689', '2021-01-10 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `DIATITHETAI`
--

CREATE TABLE `DIATITHETAI` (
  `kod_stathmou` int NOT NULL,
  `ar_pinakidas` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `DIATITHETAI`
--

INSERT INTO `DIATITHETAI` (`kod_stathmou`, `ar_pinakidas`) VALUES
(1, '	\r\nRT8734'),
(1, 'AR6456'),
(1, 'GT6543'),
(3, 'HT6798'),
(1, 'TA7654'),
(2, 'TE6543'),
(2, 'ΒΤ5689'),
(3, 'ΥΓ6754');

-- --------------------------------------------------------

--
-- Table structure for table `DIEUTHINSH`
--

CREATE TABLE `DIEUTHINSH` (
  `username` varchar(20) NOT NULL,
  `TK` varchar(5) NOT NULL,
  `poli` varchar(30) NOT NULL,
  `odos` varchar(30) NOT NULL,
  `arithmos` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `DIEUTHINSH`
--

INSERT INTO `DIEUTHINSH` (`username`, `TK`, `poli`, `odos`, `arithmos`) VALUES
('dhmhtristr', '15432', 'Πάτρα', 'Λεμεσού', 135),
('elenigeorgiou', '14532', 'Αθήνα', 'Πειραιώς', 255),
('giorgoskyriakou', '12345', 'Αίγιο', 'Θεσσαλονίκης', 111),
('isminigergopoulou', '54321', 'Πάτρα', 'Θησέως', 7),
('mariapapa', '12344', 'Πάτρα', 'Αθηνών', 4);

-- --------------------------------------------------------

--
-- Table structure for table `EGGEGRAMMENOS`
--

CREATE TABLE `EGGEGRAMMENOS` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `adt` varchar(8) NOT NULL,
  `ar_diplomatos` varchar(11) NOT NULL,
  `thl` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `EGGEGRAMMENOS`
--

INSERT INTO `EGGEGRAMMENOS` (`username`, `password`, `firstname`, `lastname`, `adt`, `ar_diplomatos`, `thl`, `email`) VALUES
('dhmhtristr', 'jimtr123', 'ΔΗΜΗΤΡΗΣ', 'ΤΡΙΑΝΤΑΦΥΛΛΟΥ', 'ΓΤ543467', 'GT5678JF8H6', '6987765645', 'dimtr@gmail.com'),
('elenigeorgiou', 'eleni123', 'ΕΛΕΝΗ', 'ΓΕΩΡΓΙΟΥ', 'ΕΠ675432', 'TR56GYT678J', '6955678767', 'elenigeorgiou@freemail.com'),
('giorgoskyriakou', '123456789', 'ΓΙΩΡΓΟΣ', 'ΚΥΡΙΑΚΟΥ', 'BP305654', '98TG7654VU1', '6955176759', 'giorgoskyriakou@gmail.com'),
('isminigergopoulou', 'ismini1999', 'ΙΣΜΗΝΗ', 'ΓΕΩΡΓΟΠΟΥΛΟΥ', 'ΚΤ567689', 'TR347H79J65', '6978563423', 'ismini1999@gmail.com'),
('mariapapa', 'maria123', 'ΜΑΡΙΑ', 'ΠΑΠΑ', 'ΠΚ198765', 'TFR56HK8GBV', '6923456789', 'mariapapa1999@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `EKPTWSH`
--

CREATE TABLE `EKPTWSH` (
  `kod_ekptwshs` varchar(8) NOT NULL,
  `pososto` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `EKPTWSH`
--

INSERT INTO `EKPTWSH` (`kod_ekptwshs`, `pososto`) VALUES
('CARGOBR', 25),
('FUTURE50', 50),
('YOUDRIVE', 5);

-- --------------------------------------------------------

--
-- Table structure for table `EKSOFLEITAI`
--

CREATE TABLE `EKSOFLEITAI` (
  `ar_krathshs` int NOT NULL,
  `kod_plhr` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `EKSOFLEITAI`
--

INSERT INTO `EKSOFLEITAI` (`ar_krathshs`, `kod_plhr`) VALUES
(27, 27),
(28, 28),
(29, 29),
(30, 30),
(31, 31),
(32, 32),
(33, 33);

-- --------------------------------------------------------

--
-- Table structure for table `EPILEGEI`
--

CREATE TABLE `EPILEGEI` (
  `ar_krathshs` int NOT NULL,
  `titlos_yphresias` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `EPILEGEI`
--

INSERT INTO `EPILEGEI` (`ar_krathshs`, `titlos_yphresias`) VALUES
(27, 'Εκτεταμένη Οδική βοήθεια'),
(28, 'Εκτεταμένη Οδική βοήθεια'),
(28, 'Πολυτελής Διακόσμηση'),
(32, 'Πολυτελής Διακόσμηση'),
(32, 'ΣΟΦΕΡ');

-- --------------------------------------------------------

--
-- Table structure for table `KALYPTETAI`
--

CREATE TABLE `KALYPTETAI` (
  `titlos_paketou` varchar(50) NOT NULL,
  `ar_krathshs` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `KALYPTETAI`
--

INSERT INTO `KALYPTETAI` (`titlos_paketou`, `ar_krathshs`) VALUES
('Ασφάλεια Ατυχήματος', 27),
('Ασφάλεια Ατυχήματος', 28),
('Ασφάλεια Ατυχήματος', 29),
('Ασφάλεια φθοράς και κλοπής', 30),
('Ασφάλεια Ατυχήματος', 31),
('Ασφάλεια φθοράς και κλοπής', 32),
('Ασφάλεια Ατυχήματος', 33);

-- --------------------------------------------------------

--
-- Table structure for table `KLASH_OXHMATOS`
--

CREATE TABLE `KLASH_OXHMATOS` (
  `typos_oxhmatos` varchar(30) NOT NULL,
  `timh` float NOT NULL,
  `ar_thesewn` int NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `KLASH_OXHMATOS`
--

INSERT INTO `KLASH_OXHMATOS` (`typos_oxhmatos`, `timh`, `ar_thesewn`, `photo`) VALUES
('OFF ROAD', 60, 4, 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/wrangler_2.jpg?itok=FLgXQnOD'),
('SUV', 60, 4, 'https://i0.wp.com/blog.spotawheel.gr/wp-content/uploads/2019/02/volvo.jpg?resize=1024%2C576&ssl=1'),
('ΜΕΣΑΙΑ', 50, 4, 'https://www.carstore.com/-/media/carstore/best/medium-cars/medium-focus-carousel-small-720x405.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=7C71AB889AF529C01870CD47EE3BED7D'),
('ΜΙΚΡΑ', 30, 4, 'https://natalisblog.com/wp-content/uploads/2018/06/peugeot-108.jpg'),
('ΠΟΛΥΤΕΛΗ', 80, 4, 'https://europeprestigecarrent.com/wp-content/uploads/2020/03/Portofino-768x432.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `KRATHSH`
--

CREATE TABLE `KRATHSH` (
  `ar_krathshs` int NOT NULL,
  `im_paralavhs` datetime NOT NULL,
  `im_epistrofhs` datetime NOT NULL,
  `topothesia` varchar(30) NOT NULL,
  `topothesia_ep` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `KRATHSH`
--

INSERT INTO `KRATHSH` (`ar_krathshs`, `im_paralavhs`, `im_epistrofhs`, `topothesia`, `topothesia_ep`) VALUES
(27, '2021-01-18 00:00:00', '2021-01-21 00:00:00', 'ΠΑΤΡΑ', 'ΠΑΤΡΑ'),
(28, '2021-01-01 00:00:00', '2021-01-04 00:00:00', 'ΠΑΤΡΑ', 'ΠΑΤΡΑ'),
(29, '2021-01-03 00:00:00', '2021-01-07 00:00:00', 'ΑΙΓΙΟ', 'ΠΑΤΡΑ'),
(30, '2021-01-01 00:00:00', '2021-01-05 00:00:00', 'ΑΘΗΝΑ', 'ΑΘΗΝΑ'),
(31, '2021-01-10 00:00:00', '2021-01-24 00:00:00', 'ΠΑΤΡΑ', 'ΠΑΤΡΑ'),
(32, '2021-01-10 00:00:00', '2021-01-15 00:00:00', 'ΠΑΤΡΑ', 'ΠΑΤΡΑ'),
(33, '2021-01-10 00:00:00', '2021-01-12 00:00:00', 'ΑΙΓΙΟ', 'ΑΙΓΙΟ');

-- --------------------------------------------------------

--
-- Table structure for table `OXHMA`
--

CREATE TABLE `OXHMA` (
  `ar_pinakidas` varchar(9) NOT NULL,
  `typos_oxhmatos` varchar(30) NOT NULL,
  `modelo` varchar(30) NOT NULL,
  `xroma` varchar(30) NOT NULL,
  `kubismos` int NOT NULL,
  `eid_kafsimou` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `OXHMA`
--

INSERT INTO `OXHMA` (`ar_pinakidas`, `typos_oxhmatos`, `modelo`, `xroma`, `kubismos`, `eid_kafsimou`) VALUES
('AR6456', 'ΠΟΛΥΤΕΛΗ', 'Porsche Cayenne', 'Ασημί', 1000, 'Αμόλυβδη'),
('GT6543', 'ΜΕΣΑΙΑ', 'Audi A4', 'Λευκό', 1000, 'Ντίζελ'),
('HT6798', 'SUV', 'BWM iX3', 'Γκρί', 1000, 'Αμόλυβδη'),
('RT8734', 'OFF ROAD', 'Toyota Tacoma', 'Ασημί', 1000, 'Αμόλυβδη'),
('TA7654', 'OFF ROAD', 'Jeep Cherokee', 'Ασημί', 1000, 'Αμόλυβδη'),
('TE6543', 'ΜΕΣΑΙΑ', 'Alpha Romeo Giulia', 'Λευκό', 1000, 'Αμόλυβδη'),
('ΒΤ5689', 'ΜΕΣΑΙΑ', 'Peugeot 407', 'Ασημί', 1000, 'Αμόλυβδη'),
('ΥΓ6754', 'ΜΙΚΡΑ', 'Mini Cooper', 'Ασημί', 1000, 'Αμόλυβδη');

-- --------------------------------------------------------

--
-- Table structure for table `PAKETO_KALYPSHS`
--

CREATE TABLE `PAKETO_KALYPSHS` (
  `titlos` varchar(50) NOT NULL,
  `perigrafh` varchar(300) NOT NULL,
  `kostos` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PAKETO_KALYPSHS`
--

INSERT INTO `PAKETO_KALYPSHS` (`titlos`, `perigrafh`, `kostos`) VALUES
('Ασφάλεια Ατυχήματος', 'Καλύπτει βασικές φθορές στο όχημα', 30),
('Ασφάλεια φθοράς και κλοπής', 'Καλύπτει κάθε φθορά στο όχημα και κλοπή του οχήματος', 50),
('Εκτεταμένη Ασφάλεια Ατυχήματος', 'Καλύπτει κάθε φθορά στο όχημα', 40);

-- --------------------------------------------------------

--
-- Table structure for table `PERIEXEI`
--

CREATE TABLE `PERIEXEI` (
  `ar_krathshs` int NOT NULL,
  `kod_ekptwshs` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PERIEXEI`
--

INSERT INTO `PERIEXEI` (`ar_krathshs`, `kod_ekptwshs`) VALUES
(27, 'FUTURE50');

-- --------------------------------------------------------

--
-- Table structure for table `PLHRWMH`
--

CREATE TABLE `PLHRWMH` (
  `kod_plhr` int NOT NULL,
  `poso` float NOT NULL,
  `tropos` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PLHRWMH`
--

INSERT INTO `PLHRWMH` (`kod_plhr`, `poso`, `tropos`) VALUES
(25, 170, 0),
(26, 190, 0),
(27, 170, 0),
(28, 190, 0),
(29, 80, 0),
(30, 110, 0),
(31, 930, 0),
(32, 640, 0),
(33, 180, 0);

-- --------------------------------------------------------

--
-- Table structure for table `PLHRWNEI`
--

CREATE TABLE `PLHRWNEI` (
  `username` varchar(20) NOT NULL,
  `kod_plhr` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PLHRWNEI`
--

INSERT INTO `PLHRWNEI` (`username`, `kod_plhr`) VALUES
('mariapapa', 27),
('mariapapa', 28),
('elenigeorgiou', 29),
('elenigeorgiou', 30),
('giorgoskyriakou', 31),
('mariapapa', 32),
('mariapapa', 33);

-- --------------------------------------------------------

--
-- Table structure for table `PRAGMATOPOIEI`
--

CREATE TABLE `PRAGMATOPOIEI` (
  `username` varchar(20) NOT NULL,
  `ar_krathshs` int NOT NULL,
  `im_krathshs` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PRAGMATOPOIEI`
--

INSERT INTO `PRAGMATOPOIEI` (`username`, `ar_krathshs`, `im_krathshs`) VALUES
('elenigeorgiou', 29, '2021-01-10 14:17:19'),
('elenigeorgiou', 30, '2021-01-10 14:17:48'),
('giorgoskyriakou', 31, '2021-01-10 14:19:09'),
('mariapapa', 27, '2021-01-10 14:15:01'),
('mariapapa', 28, '2021-01-10 14:15:30'),
('mariapapa', 32, '2021-01-10 14:19:58'),
('mariapapa', 33, '2021-01-10 14:22:31');

-- --------------------------------------------------------

--
-- Table structure for table `STATHMOS`
--

CREATE TABLE `STATHMOS` (
  `kod_stathmou` int NOT NULL,
  `perioxh` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `STATHMOS`
--

INSERT INTO `STATHMOS` (`kod_stathmou`, `perioxh`) VALUES
(1, 'ΠΑΤΡΑ'),
(2, 'ΑΙΓΙΟ'),
(3, 'ΑΘΗΝΑ');

-- --------------------------------------------------------

--
-- Table structure for table `STOIXEIA_KARTAS`
--

CREATE TABLE `STOIXEIA_KARTAS` (
  `kod_plhr` int NOT NULL,
  `ar_kartas` varchar(16) NOT NULL,
  `on_katoxou` varchar(30) NOT NULL,
  `im_lhkshs` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `YPHRESIES`
--

CREATE TABLE `YPHRESIES` (
  `titlos` varchar(50) NOT NULL,
  `perigrafh` text NOT NULL,
  `kostos` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `YPHRESIES`
--

INSERT INTO `YPHRESIES` (`titlos`, `perigrafh`, `kostos`) VALUES
('Εκτεταμένη Οδική βοήθεια', 'Εκτεταμένη υποστήριξη για τουριστικούς προορισμούς, αξιοθέατα και άλλα', 30),
('Πολυτελής Διακόσμηση', 'Πολυτελής διακόσμηση κατάλληλη για γάμους και κοινωνικά event', 60),
('ΣΟΦΕΡ', 'Ιδιωτικός σοφέρ', 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AFORA`
--
ALTER TABLE `AFORA`
  ADD PRIMARY KEY (`ar_krathshs`,`typos_oxhmatos`),
  ADD KEY `AFORA_fk1` (`typos_oxhmatos`);

--
-- Indexes for table `AFORA_SYGKEKRIMENA`
--
ALTER TABLE `AFORA_SYGKEKRIMENA`
  ADD PRIMARY KEY (`ar_krathshs`,`ar_pinakidas`),
  ADD KEY `AFORA_SYGKEKRIMENA_fk1` (`ar_pinakidas`);

--
-- Indexes for table `DIATITHETAI`
--
ALTER TABLE `DIATITHETAI`
  ADD PRIMARY KEY (`kod_stathmou`,`ar_pinakidas`),
  ADD KEY `DIATITHETAI_fk1` (`ar_pinakidas`);

--
-- Indexes for table `DIEUTHINSH`
--
ALTER TABLE `DIEUTHINSH`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `TK` (`TK`);

--
-- Indexes for table `EGGEGRAMMENOS`
--
ALTER TABLE `EGGEGRAMMENOS`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `adt` (`adt`),
  ADD UNIQUE KEY `ar_diplomatos` (`ar_diplomatos`);

--
-- Indexes for table `EKPTWSH`
--
ALTER TABLE `EKPTWSH`
  ADD PRIMARY KEY (`kod_ekptwshs`);

--
-- Indexes for table `EKSOFLEITAI`
--
ALTER TABLE `EKSOFLEITAI`
  ADD PRIMARY KEY (`ar_krathshs`,`kod_plhr`),
  ADD KEY `EKSOFLEITAI_fk1` (`kod_plhr`);

--
-- Indexes for table `EPILEGEI`
--
ALTER TABLE `EPILEGEI`
  ADD PRIMARY KEY (`ar_krathshs`,`titlos_yphresias`),
  ADD KEY `EPILEGEI_fk1` (`titlos_yphresias`);

--
-- Indexes for table `KALYPTETAI`
--
ALTER TABLE `KALYPTETAI`
  ADD PRIMARY KEY (`titlos_paketou`,`ar_krathshs`),
  ADD KEY `KALYPTETAI_fk1` (`ar_krathshs`);

--
-- Indexes for table `KLASH_OXHMATOS`
--
ALTER TABLE `KLASH_OXHMATOS`
  ADD PRIMARY KEY (`typos_oxhmatos`);

--
-- Indexes for table `KRATHSH`
--
ALTER TABLE `KRATHSH`
  ADD PRIMARY KEY (`ar_krathshs`);

--
-- Indexes for table `OXHMA`
--
ALTER TABLE `OXHMA`
  ADD PRIMARY KEY (`ar_pinakidas`),
  ADD KEY `OXHMA_fk0` (`typos_oxhmatos`);

--
-- Indexes for table `PAKETO_KALYPSHS`
--
ALTER TABLE `PAKETO_KALYPSHS`
  ADD PRIMARY KEY (`titlos`);

--
-- Indexes for table `PERIEXEI`
--
ALTER TABLE `PERIEXEI`
  ADD PRIMARY KEY (`ar_krathshs`,`kod_ekptwshs`),
  ADD KEY `PERIEXEI_fk1` (`kod_ekptwshs`);

--
-- Indexes for table `PLHRWMH`
--
ALTER TABLE `PLHRWMH`
  ADD PRIMARY KEY (`kod_plhr`);

--
-- Indexes for table `PLHRWNEI`
--
ALTER TABLE `PLHRWNEI`
  ADD PRIMARY KEY (`username`,`kod_plhr`),
  ADD KEY `PLHRWNEI_fk1` (`kod_plhr`);

--
-- Indexes for table `PRAGMATOPOIEI`
--
ALTER TABLE `PRAGMATOPOIEI`
  ADD PRIMARY KEY (`username`,`ar_krathshs`),
  ADD KEY `PRAGMATOPOIEI_fk1` (`ar_krathshs`);

--
-- Indexes for table `STATHMOS`
--
ALTER TABLE `STATHMOS`
  ADD PRIMARY KEY (`kod_stathmou`);

--
-- Indexes for table `STOIXEIA_KARTAS`
--
ALTER TABLE `STOIXEIA_KARTAS`
  ADD PRIMARY KEY (`kod_plhr`);

--
-- Indexes for table `YPHRESIES`
--
ALTER TABLE `YPHRESIES`
  ADD PRIMARY KEY (`titlos`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `KRATHSH`
--
ALTER TABLE `KRATHSH`
  MODIFY `ar_krathshs` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `PLHRWMH`
--
ALTER TABLE `PLHRWMH`
  MODIFY `kod_plhr` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `STATHMOS`
--
ALTER TABLE `STATHMOS`
  MODIFY `kod_stathmou` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `STOIXEIA_KARTAS`
--
ALTER TABLE `STOIXEIA_KARTAS`
  MODIFY `kod_plhr` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `AFORA`
--
ALTER TABLE `AFORA`
  ADD CONSTRAINT `AFORA_fk0` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `AFORA_fk1` FOREIGN KEY (`typos_oxhmatos`) REFERENCES `KLASH_OXHMATOS` (`typos_oxhmatos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `AFORA_SYGKEKRIMENA`
--
ALTER TABLE `AFORA_SYGKEKRIMENA`
  ADD CONSTRAINT `AFORA_SYGKEKRIMENA_fk0` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `AFORA_SYGKEKRIMENA_fk1` FOREIGN KEY (`ar_pinakidas`) REFERENCES `OXHMA` (`ar_pinakidas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DIATITHETAI`
--
ALTER TABLE `DIATITHETAI`
  ADD CONSTRAINT `DIATITHETAI_fk0` FOREIGN KEY (`kod_stathmou`) REFERENCES `STATHMOS` (`kod_stathmou`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DIATITHETAI_fk1` FOREIGN KEY (`ar_pinakidas`) REFERENCES `OXHMA` (`ar_pinakidas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DIEUTHINSH`
--
ALTER TABLE `DIEUTHINSH`
  ADD CONSTRAINT `DIEUTHINSH_fk0` FOREIGN KEY (`username`) REFERENCES `EGGEGRAMMENOS` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `EKSOFLEITAI`
--
ALTER TABLE `EKSOFLEITAI`
  ADD CONSTRAINT `EKSOFLEITAI_fk0` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EKSOFLEITAI_fk1` FOREIGN KEY (`kod_plhr`) REFERENCES `PLHRWMH` (`kod_plhr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `EPILEGEI`
--
ALTER TABLE `EPILEGEI`
  ADD CONSTRAINT `EPILEGEI_fk0` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EPILEGEI_fk1` FOREIGN KEY (`titlos_yphresias`) REFERENCES `YPHRESIES` (`titlos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `KALYPTETAI`
--
ALTER TABLE `KALYPTETAI`
  ADD CONSTRAINT `KALYPTETAI_fk0` FOREIGN KEY (`titlos_paketou`) REFERENCES `PAKETO_KALYPSHS` (`titlos`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `KALYPTETAI_fk1` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `OXHMA`
--
ALTER TABLE `OXHMA`
  ADD CONSTRAINT `OXHMA_fk0` FOREIGN KEY (`typos_oxhmatos`) REFERENCES `KLASH_OXHMATOS` (`typos_oxhmatos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PERIEXEI`
--
ALTER TABLE `PERIEXEI`
  ADD CONSTRAINT `PERIEXEI_fk0` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PERIEXEI_fk1` FOREIGN KEY (`kod_ekptwshs`) REFERENCES `EKPTWSH` (`kod_ekptwshs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PLHRWNEI`
--
ALTER TABLE `PLHRWNEI`
  ADD CONSTRAINT `PLHRWNEI_fk0` FOREIGN KEY (`username`) REFERENCES `EGGEGRAMMENOS` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PLHRWNEI_fk1` FOREIGN KEY (`kod_plhr`) REFERENCES `PLHRWMH` (`kod_plhr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PRAGMATOPOIEI`
--
ALTER TABLE `PRAGMATOPOIEI`
  ADD CONSTRAINT `PRAGMATOPOIEI_fk0` FOREIGN KEY (`username`) REFERENCES `EGGEGRAMMENOS` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PRAGMATOPOIEI_fk1` FOREIGN KEY (`ar_krathshs`) REFERENCES `KRATHSH` (`ar_krathshs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `STOIXEIA_KARTAS`
--
ALTER TABLE `STOIXEIA_KARTAS`
  ADD CONSTRAINT `STOIXEIA_KARTAS_fk0` FOREIGN KEY (`kod_plhr`) REFERENCES `PLHRWMH` (`kod_plhr`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
