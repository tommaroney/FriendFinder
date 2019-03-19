drop database if exists friendsdb;

CREATE DATABASE friendsdb;

create table friends(
	id int(10) not null auto_increment,
    name varchar(50) not null,
    photo varchar(250) not null,
    primary key(id)
);

CREATE TABLE `survey` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `friend_id` int(10) NOT NULL,
  `q1` int(1) NOT NULL,
  `q2` int(1) NOT NULL,
  `q3` int(1) NOT NULL,
  `q4` int(1) NOT NULL,
  `q5` int(1) NOT NULL,
  `q6` int(1) NOT NULL,
  `q7` int(1) NOT NULL,
  `q8` int(1) NOT NULL,
  `q9` int(1) NOT NULL,
  `q10` int(1) NOT NULL,
  PRIMARY KEY (`id`)
);