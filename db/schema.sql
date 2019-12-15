drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burgers
(
    id int auto_increment not null,
    burger_name varchar (30),
    devoured boolean,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL, 
    primary key (id)
)
