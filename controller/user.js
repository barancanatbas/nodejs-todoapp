const service = require('../service/user.js');
const redis = require("../config/redis.js");

const getUsers = async (req,res) => {

    let redisKey = "users";
    const redisData = await redis.get(redisKey);

    if (redisData != null) {
        console.log("redis data : ",redisData);
        res.status(200).json(JSON.parse(redisData));
        res.end();
        return 
    }
    console.log("not redis");
    try {
        const users = await service.getUsers();

        redis.set(redisKey,JSON.stringify(users));

        res.status(200).json(users);
        res.end();
        return
    } catch (err) {
        res.status(400).json(err);
    }
};

const getUser = (req,res) => {
    const {id} = req.params;
    service.getUser(id).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(400).json(err);
    });
}

const insertUser = (req,res) => {
    const {name,surname,phone} = req.body;
    service.insertUser(name,surname,phone).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(err);
    });
};

const updateUser = (req,res) => {
    const {name,surname,phone,id} = req.body;
    service.updateUser(name,surname,phone,id).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(err);
    });
};

const deleteUser = (req,res) => {
    const {id} = req.params;

    // force delete
    // service.deleteUser(id).then((result) => {
    //     res.status(200).json(result);
    // }).catch((err) => {
    //     res.status(400).json(err);
    // });

    service.deleteUserDeleteAt(id).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(err);
    });
};


module.exports = {
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser,
}