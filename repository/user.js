const pool = require('../config/db');


const getUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM newdb.users', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });

    });
};

const getUser = (id) => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM newdb.users WHERE id = ?', id, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const insertUser = (user) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO newdb.users SET ?', user, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateUser = (user) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE newdb.users SET ? WHERE id = ?', [user, user.id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// delete from table
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM newdb.users WHERE id = ?', id, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// delete for deleted_at
const deleteUserDeleteAt = (id) => {
    return new Promise((resolve, reject) => {
        pool.query("UPDATE newdb.users SET ? where id = ?", [{deleted_at: new Date()}, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getUsers,
    insertUser,
    updateUser,
    deleteUser,
    deleteUserDeleteAt,
    getUser,
}