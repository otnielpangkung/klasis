const { KelompokMA, MataAnggaran, Anggaran, Transaksi, Saldo, Jemaat, User, JenisTransaksi } = require("../models")


class DataBaseController {


    static addKelompokMa(req, res) {

        KelompokMA.create({
            namaKelMa: req.body.namaKelMa,
            JenisTransaksiId: +req.body.JenisTransaksiId,
            JemaatId: +req.loggedUser.JemaatId,
            code: req.body.code

        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static editKelMa(req, res) {

        KelompokMA.update({
            namaKelMa: req.body.namaKelMa,
            code: req.body.code
        }, {
            where: {
                id: req.params.id,
                JemaatId: +req.loggedUser.JemaatId,
            }
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static addMataAnggaran(req, res) {

        MataAnggaran.create({
            namaMataAnggaran: req.body.namaMataAnggaran,
            JemaatId: +req.loggedUser.JemaatId,
            JenisTransaksiId: +req.body.JenisTransaksiId,
            KelompokMAId: +req.body.KelompokMAId,
            code: req.body.code
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static editMataAnggaran(req, res) {

        MataAnggaran.update({
            namaMataAnggaran: req.body.namaMataAnggaran,
            code: req.body.code
        }, {
            where: {
                id: req.params.id,
                JemaatId: +req.loggedUser.JemaatId,
            }
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static getSaldo(req, res) {
        Saldo.findAll({
            where: {
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }


    static getJenisTransaksi(req, res) {
        JenisTransaksi.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static getAllKelMa(req, res) {
        KelompokMA.findAll({
            include: [Transaksi, MataAnggaran],
            order: [["JenisTransaksiId", "ASC"], ["code", "ASC"]],
            where: {
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static getMataAnggaran(req, res) {
        MataAnggaran.findAll({
            include: [Transaksi, KelompokMA, Anggaran],
            order: [["code", "asc"]],
            where: {
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static getKelMaUser(req, res) {

        KelompokMA.findAll({
            where: {
                JenisTransaksiId: req.params.id,
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static getMaperKelompok(req, res) {
        MataAnggaran.findAll({
            where: {
                KelompokMAId: req.params.id,
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static resetSaldo(req, res) {
        Saldo.update({
            jmlhSaldo: req.body.saldo
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static deleteSaldo(req, res) {
        Saldo.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

}

module.exports = DataBaseController