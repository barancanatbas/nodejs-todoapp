const repository = require('../repository/user.js');

const getUsers = async () => {
    try {
        const users = await repository.getUsers();
        return new Promise((resolve, reject) => {
            resolve(users);
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }

};

const getUser = async (id) => {
    try {
        const user = await repository.getUser(id);
        return new Promise((resolve, reject) => {
            resolve(user);
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const insertUser = async (name,surname,phone) => {
    try {
        await repository.insertUser({name:name,surname:surname,phone:phone,created_at:new Date()});
        return new Promise((resolve, reject) => {
            resolve("inserted successfully");
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const updateUser = async (name,surname,phone,id) => {
    try {
        await repository.updateUser({name:name,surname:surname,phone:phone,id:id,updated_at:new Date()});
        return new Promise((resolve, reject) => {
            resolve("updated successfully");
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const deleteUser = async (id) => {
    try {
        await repository.deleteUser(id)
        return new Promise((resolve, reject) => {
            resolve("deleted successfully");
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const deleteUserDeleteAt = async (id) => {
    try {
        await repository.deleteUserDeleteAt(id)
        return new Promise((resolve, reject) => {
            resolve("deleted successfully");
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};



module.exports = {
    getUsers,
    insertUser,
    updateUser,
    deleteUser,
    deleteUserDeleteAt,
    getUser,
}