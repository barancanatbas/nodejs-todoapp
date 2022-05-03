const redis = require("redis");

const client = redis.createClient();

client.on("error", function (err) {
  console.log(err);
});

client.on("connect", function () {
  console.log("Redis client connected");
});

const connect = async () => {
    try {
        await client.connect();
    } catch (err) {
        return new Promise.reject(err);
    }
};

const set = async (key, value) => {
    try {
        await client.set(key, value, function (err, reply) {
          if (err) {
            console.log(err);
          }
          console.log(reply);
        });
    } catch(err) {
        console.log(err);
    }
};

const setWithExpire = async (key, value, expire) => {
    try {
        await client.set(key, value, 'EX', {
            EX: expire
        });
    } catch(err) {
        console.log(err);
    }
};

const get = async (key) => {
    try {
        const data = await client.get(key);
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    } catch(err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
}

module.exports = {
  set,
  get,
  connect,
  setWithExpire,
};
