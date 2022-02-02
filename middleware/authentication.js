const { tokenGenerate, cekToken } = require("../helper/token")
const { User } = require("../models")

async function Authentication(req, res, next) {

    try {
        const { access_token } = req.headers
        if (access_token) {
            const decoded = cekToken(access_token)
            let data = await User.findOne({
                where: {
                    username: decoded.username,
                }
            });
            if (!data) {
                next({
                    name: "Authentication",
                    status: 401,
                    msg: "Email / Password not Found"
                })
            } else {
                // console.log(decoded.id);
                req.loggedUser = decoded
                next()
            }
        } else {
            next({
                name: "Authentication",
                status: 401,
                msg: "FORBIDDEN"
            })
        }
    }
    catch (err) {
        next({
            name: "Authentication",
            status: 401,
            msg: "FORBIDDEN"
        })
    }
}

module.exports = Authentication