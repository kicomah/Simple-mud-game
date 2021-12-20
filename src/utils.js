const crypto = require('crypto');
const User = require("./models/User");

const encryptPassword = (password) => {
    return crypto.createHash('sha512').update(password).digest('base64');
}

const setAuth = async (req, res, next) => {
    // console.log(req.cookies)
    const authorization = req.cookies.authorization;
    // authorization이 존재하지 않거나 빈 문자열이면 무조건 login으로 보내버립니다.
    if (!authorization) {
        return res.redirect('/login')
    }
    
    // authorization이 존재하고 1자 이상의 문자열이면 key를 알아낸 뒤 user를 req에 정의합니다.
    const [bearer, key] = authorization.split(' ');
    if (bearer !== 'Bearer') {
        return res.send({error: 'Wrong Authorization'}).status(400);
    } else {
        const user = await User.findOne({ key });
        if (!user) {
            return res.send({error: 'Cannot find user'}).status(404);
        } else {
            req.user = user;
            return next();
        }
    }
}
module.exports = {
    encryptPassword,
    setAuth,
}