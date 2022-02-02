const { User, Jemaat, Saldo, Transaksi, Anggaran, KelompokMA, MataAnggaran } = require("../models")
const { bcryptPass, cekPass } = require("../helper/bcrypt")
const { tokenGenerate, cekToken } = require("../helper/token")

class UserController {
    // static login(req, res) {

    static login(req, res) {
        // console.log("masuk login", req.body);
        User.findOne({
            include: [Jemaat],
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                if (data) {
                    // console.log(data, "dataaaaa");
                    let password = cekPass(req.body.password, data.password)
                    if (password) {
                        let user = { username: data.username, id: data.id, role: data.role, JemaatId: data.JemaatId }
                        let access_token = tokenGenerate(user)
                        // console.log(user, "userrr---");
                        res.status(200).json({ id: data.id, username: data.username, Jemaat: data.Jemaat.namaJemaat, role: data.role, access_token: access_token, })
                        // res.status(200).json(data)
                    } else {
                        res.status(401).json(err)
                    }
                } else {
                    res.status(401).json(err)
                }
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static register(req, res) {
        User.findOne({
            where: {
                username: req.body.username,
            }
        })
            .then(data => {
                if (!data) {
                    User.create({
                        username: req.body.username,
                        password: req.body.password,
                        role: req.body.role,
                        JemaatId: +req.body.JemaatId
                    })
                        .then(data => {
                            // res.status(200).json({ id: data.id, username: data.username, role: data.role })
                            res.status(200).json({ data })
                        })
                }
                else {
                    res.status(401).json({ msg: "Data Salah" })
                }
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static changePassword(req, res) {
        User.update({
            password: bcryptPass(req.body.password)
        }, {
            where: {
                id: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static resetPass(req, res) {
        console.log("================");
        User.update({
            password: bcryptPass("admin")
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static resetPass1(req, res) {
        Transaksi.update({
            status: "open"
        }, {
            where: {
                status: "close",
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getAllUser(req, res) {
        User.findAll({
            include: [Jemaat]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static addJemaat(req, res) {
        Jemaat.findOne({
            where: {
                namaJemaat: req.body.namaJemaat
            }
        })
            .then(data => {
                if (!data) {
                    Jemaat.create({
                        namaJemaat: req.body.namaJemaat
                    })
                        .then(data => {
                            res.status(200).json(data)
                        })
                } else {
                    res.status(404).json(err)
                }
            })

            .catch(err => {
                res.status(404).json(err)
            })
    }
    static deleteUser(req, res) {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static deleteJemaat(req, res) {
        Jemaat.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                return Anggaran.destroy({
                    where: {
                        JemaatId: req.params.id
                    }
                })
            })
            .then(data => {
                return Saldo.destroy({
                    where: {
                        JemaatId: req.params.id
                    }
                })
            })
            .then(data => {
                return User.destroy({
                    where: {
                        JemaatId: req.params.id
                    }
                })
            })
            .then(data => {
                return KelompokMA.destroy({
                    where: {
                        JemaatId: req.params.id
                    }
                })
            })
            .then(data => {
                return Transaksi.destroy({
                    where: {
                        JemaatId: req.params.id
                    }
                })
            })
            .then(data => {
                return MataAnggaran.destroy({
                    where: {
                        JemaatId: req.params.id
                    }
                })
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getAllJemaat(req, res) {
        Jemaat.findAll({
            include: [User]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

}

module.exports = UserController