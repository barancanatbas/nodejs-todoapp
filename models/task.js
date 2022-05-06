const { sequelize } = require('../config/db');
const { Sequelize, DataTypes, Model } = require('sequelize');

const task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});


module.exports = {
    task
}