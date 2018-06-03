-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-05-11 05:58:29
-- 服务器版本： 5.7.18
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cAuth`
--

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE `nameinfo` (
  `classgroup` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `stuid` int(10) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sex` varchar(5) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `nameinfo` (`classgroup`,`stuid`, `name`, `sex`) VALUES
('计算机1402',20140001, '吴彦祖', '男'),
('计算机1402',20140002, '杨幂', '女'),
('计算机1402',20140003, '刘亦菲', '女'),
('计算机1402',20140004, '范冰冰', '女'),
('计算机1402',20140005, '韩红', '女'),
('计算机1402',20140006, '贾玲', '女'),
('计算机1402',20140007, '李冰冰', '女'),
('计算机1402',20140008, '高圆圆', '女'),
('计算机1402',20140009, '汪峰', '男'),
('计算机1402',20140010, '章子怡', '女'),
('计算机1402',20140011, '李蕾', '女'),
('计算机1402',20140012, '孙俪', '女'),
('计算机1402',20140013, '贾静雯', '女'),
('计算机1402',20140014, '景甜', '女'),
('计算机1402',20140015, '唐嫣', '女'),
('计算机1402',20140016, '周冬雨', '女'),
('计算机1402',20140017, '任达华', '男'),
('计算机1402',20140018, '田馥甄', '女'),
('计算机1403',20140019, '张惠妹', '女'),
('计算机1403',20140020, '白百何', '女'),
('计算机1403',20140021, '李小璐', '女'),
('计算机1403',20140022, '刘嘉玲', '女'),
('计算机1403',20140023, '温碧霞', '女'),
('计算机1403',20140024, '应采儿', '女'),
('计算机1403',20140025, '容祖儿', '男'),
('计算机1403',20140026, '李宇春', '女'),
('计算机1403',20140027, '霍思燕', '女'),
('计算机1403',20140028, '张馨予', '女'),
('计算机1403',20140029, '杨颖', '女'),
('计算机1403',20140030, '赵丽颖', '女'),
('计算机1403',20140031, '杨紫', '女'),
('计算机1403',20140032, '刘涛', '女'),
('计算机1403',20140033, '姚笛', '女'),
('计算机1403',20140034, '姚晨', '女'),
('计算机1403',20140035, '闫妮', '女');
--
--
--

--
-- 
--
ALTER TABLE `nameinfo`
  ADD PRIMARY KEY (`stuid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
