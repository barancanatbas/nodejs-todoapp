const mysql = require('mysql');
const { Sequelize } = require('sequelize');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'newdb',
});


const sequelize = new Sequelize('newdb', 'root', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

module.exports = {
    pool,
    sequelize,
};