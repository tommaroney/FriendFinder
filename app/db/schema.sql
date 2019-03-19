drop database if exists friendsdb;

CREATE DATABASE friendsdb;

create table friends(
	id int(10) not null auto_increment,
    name varchar(50) not null,
    photo varchar(250) not null,
    primary key(id)
);