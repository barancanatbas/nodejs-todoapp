const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        res.status(401).json({
            message: "No token provided."
        });
        return;
    }

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, 'secret', (err, decoded) => {
        if (err) {
            res.status(401).json({
                message: "Failed to authenticate token."
            });
            return;
        }
        
        req.user = decoded.user;
        next();
    });
};

module.exports = auth;