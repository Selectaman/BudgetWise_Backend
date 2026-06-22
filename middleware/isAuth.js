const jwt = require('jsonwebtoken')

const isAuth = async (req, res, next) => {
    const headerObj = req.headers;
    const token = headerObj?.authorization?.split(" ")[1];

    const verifyToken = jwt.verify(token, "budgetwisekey",(err,decoded)=>{
        if (err){
            return false;
        }
        else {
            return decoded;
        }
    });
    if (verifyToken) {
        req.user = verifyToken.id;
        next();
    }
    else{
        const err = new Error("Token expired, login again!");
        next(err);
    }
};

module.exports = isAuth;